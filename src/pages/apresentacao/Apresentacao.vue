<template>
  <q-page class="flex flex-center bg-blue-7">
    <div class="row justify-center q-gutter-y-lg">
      <div class="col-12 q-pb-md">
        <div class="text-h2 text-center text-yellow-8 text-weight-bold">
          Sem<br/>Muvuca
        </div>
      </div>
      <div class="col-8 q-py-md">
        <div class="text-h6 text-center text-white text-weight-bold">
          Scaneie seus produtos, pague e leve para casa
        </div>
      </div>
        <q-btn class="col-7 bg-yellow-8 q-mt-xl" to="/registro">crie sua conta</q-btn>
        <q-btn flat to="/login" text-color="white" class="col-7 bg-blue-9">já tenho uma conta</q-btn>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Apresentacao',

  setup () {

    return {
    }
  }
})
</script>

<style scoped>
</style>
