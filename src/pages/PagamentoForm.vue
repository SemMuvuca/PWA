<template>

  <q-form
    id="form-checkout"
    @submit="onSubmit"
    @reset="onReset"
    class="q-gutter-md"
  >
  <div class="text-center q-px-md">
    <div class="row justify-start">
      <div class="col-2" @click="voltar">
        <q-icon class="q-pt-md" size="md" color="grey" name="arrow_back"></q-icon>
      </div>
      <div class="col-9">
        <div class="text-h6 q-py-md">Detalhes do comprador</div>
      </div>

    <div class="row q-pb-xl justify-between">
        <div class="col-12">
          <q-input id="form-checkout__cardholderEmail" class="q-pb-sm" outlined label="Email"></q-input>
        </div>
        <div class="col-4">
          <q-select id="form-checkout__identificationType" outlined label="Doc."></q-select>
        </div>
        <div class="col-7">
          <q-input id="form-checkout__identificationNumber" outlined label="Núm. de identificação"></q-input>
        </div>
      </div>
      <div class="text-h6 q-py-md">Informação do cartão</div>
      <div class="row justify-between">
        <div class="col-12">
          <q-input id="form-checkout__cardholderName" class="q-pb-sm" outlined label="Nome do titular"></q-input>
        </div>
        <div class="col-12">
          <q-input id="form-checkout__cardNumber" class="q-pb-sm" outlined label="Núm. do cartão"></q-input>
        </div>
        <div class="col-7">
          <q-select id="form-checkout__installments" outlined label="Parcelas"></q-select>
        </div>
        <div class="col-2">
          <q-input id="form-checkout__cardExpirationMonth" outlined label="Mês"></q-input>
        </div>
        <div class="text-h3 text-grey">/</div>
        <div class="col-2">
          <q-input id="form-checkout__cardExpirationYear" outlined label="Ano"></q-input>
        </div>
      </div>
    </div>
    </div>
    <div class="q-px-xs">
        <q-checkbox v-model="right" label="Salvar informações do cartão" />
    </div>
    <div class="row q-px-md">
      <q-btn id="form-checkout__submit" class="col-12" color="green" >Pagar</q-btn>
    </div>
    <div id="issuerInput" class="form-group col-sm-12 hidden">
      <select id="form-checkout__issuer" name="issuer" class="form-control"></select>
    </div>
  </q-form>
</template>

<script>
import { defineComponent, inject, computed } from 'vue';

export default {
  setup() {
    const store = inject('store')
    const mp = new MercadoPago('TEST-e5cf1519-a8c0-44d6-ba2d-8e05cdbe44c6');

    const cardForm = mp.cardForm({
      amount: String(store.totalPrice),
      autoMount: true,
      form: {
        id: "form-checkout",
        cardholderName: {
          id: "form-checkout__cardholderName",
          placeholder: "Titular do cartão",
        },
        cardholderEmail: {
          id: "form-checkout__cardholderEmail",
          placeholder: "E-mail",
        },
        cardNumber: {
          id: "form-checkout__cardNumber",
          placeholder: "Número do cartão",
        },
        cardExpirationMonth: {
          id: "form-checkout__cardExpirationMonth",
          placeholder: "Mês de vencimento",
        },
        cardExpirationYear: {
          id: "form-checkout__cardExpirationYear",
          placeholder: "Ano de vencimento",
        },
        securityCode: {
          id: "form-checkout__securityCode",
          placeholder: "Código de segurança",
        },
        installments: {
          id: "form-checkout__installments",
          placeholder: "Parcelas",
        },
        identificationType: {
          id: "form-checkout__identificationType",
          placeholder: "Tipo de documento",
        },
        identificationNumber: {
          id: "form-checkout__identificationNumber",
          placeholder: "Número do documento",
        },
        issuer: {
          id: "form-checkout__issuer",
          placeholder: "Banco emissor",
        },
      },
      callbacks: {
        onFormMounted: error => {
          if (error) return console.warn("Form Mounted handling error: ", error);
          console.log("Form mounted");
        },
        onSubmit: event => {
          event.preventDefault();

          const {
            paymentMethodId: payment_method_id,
            issuerId: issuer_id,
            cardholderEmail: email,
            amount,
            token,
            installments,
            identificationNumber,
            identificationType,
          } = cardForm.getCardFormData();

          fetch("/process_payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token,
              issuer_id,
              payment_method_id,
              transaction_amount: Number(amount),
              installments: Number(installments),
              description: "Descrição do produto",
              payer: {
                email,
                identification: {
                  type: identificationType,
                  number: identificationNumber,
                },
              },
            }),
          });
        },
        onFetching: (resource) => {
          console.log("Fetching resource: ", resource);

          // Animate progress bar
          const progressBar = document.querySelector(".progress-bar");
          progressBar.removeAttribute("value");

          return () => {
            progressBar.setAttribute("value", "0");
          };
        },
      },
    });

    const voltar = () => {
      console.log("aaa")
    }

    return{
      voltar
    }

  },
}
</script>

