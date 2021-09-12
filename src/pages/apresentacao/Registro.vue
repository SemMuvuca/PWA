<template>
  <q-page class="row wrap justify-center items-center content-center q-gutter-y-md bg-blue-7">
    <div class="col-11">
      <q-input
        v-model="user.email"
        type="email"
        standout="bg-yellow-8 text-black"
        bg-color="white"
        hint="E-mail"
        filled
        :rules="[
          val => isValidEmail(val)
        ]"
      />
    </div>
    <div class="col-11">
      <q-input
        v-model="user.password"
        :type="isPwd ? 'password' : 'text'"
        standout="bg-yellow-8 text-black"
        bg-color="white"
        hint="Senha"
        filled
        :rules="[
          val => isPasswordValid(val)
        ]"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
    </div>
    <div class="col-11 row justify-between">
      <div class="col-6">
        <q-input
          v-model="user.telephoneNumber"
          standout="bg-yellow-8 text-black"
          bg-color="white"
          hint="num. de telefone"
          mask="(##) #####-####"
          filled
          :rules="[
          val => isTelephoneValid(val)
        ]"
        />
      </div>
      <div class="col-5">
        <q-input
          v-model="user.birthday"
          type="text"
          standout="bg-yellow-8 text-black"
          bg-color="white"
          hint="nascimento"
          filled
        >
          <template v-slot:append>
            <q-icon
              name="event"
              class="cursor-pointer"
            >
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date
                v-model="user.birthday"
                  mask="DD/MM/YYYY"
                >
                  <div class="row items-center justify-end">
                    <q-btn
                      flat
                      v-close-popup
                      label="Close"
                      color="primary"
                    />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </div>
    <div class="col-11">
      <q-select
        v-model="user.genre"
        :options=genderOptions
        standout="bg-yellow-8 text-black"
        bg-color="white"
        hint="Gênero"
        filled
      />
    </div>
    <q-btn flat class="col-9 bg-yellow-8" label="Cadastrar" @click="tratamentos" />
  </q-page>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue';
import { date } from 'quasar'
import { isValidEmail, isPasswordValid, isTelephoneValid } from '../../helpers/ValidationHelper'

export default defineComponent({
  name: 'Login',

  setup () {

    const user = reactive({
      email: '',
      password: '',
      genre: '',
      telephoneNumber: '',
      birthday: date.formatDate(Date.now(), 'DD/MM/YYYY'),
    })

    const check = ref(false)
    const isPwd = ref(true)
    const genderOptions = ref(['Masculino', 'Feminino', 'Não-binário'])

    function tratamentos () {
      // console.log(typeof(date.extractDate(birthday, 'DD/MM/YYYY'))) -- transformação em Date type
      // telephoneNumber.value = telephoneNumber.value.replace(/[^\w\\s]/gi, '') -- tratamento do numero
      console.log(user.email)
    }

    return {
      user,
      check,
      isPwd,
      genderOptions,
      isValidEmail,
      isPasswordValid,
      isTelephoneValid,
      tratamentos
    }
  }
})
</script>
