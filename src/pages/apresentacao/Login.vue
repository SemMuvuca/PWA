<template>
  <q-page class="row wrap justify-center items-center content-center bg-blue-7 ">
    <div class="col-10 q-pb-xl">
      <q-input standout="bg-yellow-8 text-black" bg-color="white" hint="E-mail" />
    </div>
    <div class="col-10 q-pb-xs">
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
    <div class="col-10 row justify-between q-pb-md">
      <div class="col-6">
        <q-checkbox
          keep-color
          v-model="check"
          color="yellow-8"
          label="Lembrar senha"
          class="text-white"
        />
      </div>
      <div class="col-5 text-white q-pt-xs">
        <a class="text-body1 text-white" href="/#/main/carrinho">Esqueci a senha</a>
      </div>
    </div>
    <q-btn flat class="col-7 bg-yellow-8" @click="pushToMain">
      Logar
    </q-btn>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'Login',

  setup () {
    const router = useRouter() // Compôe a instância do router
    const route = useRoute() // Acessa as propriedades da URL atual

    const check = ref(false)
    const isPwd = ref(true)
    const password = ref('')

    //Local methods:
    function pushToMain() {
      router.push({
        name: 'Main',
        params: {
          userId: 'teste'
        }
      })
    }

    return {
      check,
      password,
      isPwd,
      pushToMain
    }
  }
})
</script>
