<template>
  <q-page class="row wrap justify-center items-center content-center q-gutter-y-md bg-blue-7">
    <div class="col-11">
      <q-input
        v-model="email"
        standout="bg-yellow-8 text-black"
        bg-color="white"
        hint="E-mail"
        filled
      />
    </div>
    <div class="col-11">
      <q-input
        v-model="password"
        :type="isPwd ? 'password' : 'text'"
        standout="bg-yellow-8 text-black"
        bg-color="white"
        hint="Senha"
        filled
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
        v-model="telephoneNumber"
          standout="bg-yellow-8 text-black"
          bg-color="white"
          hint="num. de telefone"
          filled
        />
      </div>
      <div class="col-5">
        <q-input
          v-model="birthday"
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
                  v-model="birthday"
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
        v-model="genre"
        :options=genderOptions
        standout="bg-yellow-8 text-black"
        bg-color="white"
        hint="Gênero"
        filled
      />
    </div>
    <q-btn flat class="col-9 bg-yellow-8" label="Cadastrar" />
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { date } from 'quasar'

export default defineComponent({
  name: 'Login',

  setup () {

    const email = ref('')
    const password = ref('')
    const genre = ref('')
    const telephoneNumber = ref('')

    const check = ref(false)
    const isPwd = ref(true)
    const birthday = ref(date.formatDate(Date.now(), 'DD/MM/YYYY'))
    const genderOptions = ref(['Masculino', 'Feminino', 'Não-binário'])

    return {
      email,
      password,
      genre,
      telephoneNumber,
      check,
      isPwd,
      birthday,
      genderOptions,
    }
  }
})
</script>
