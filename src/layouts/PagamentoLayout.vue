<template>
  <q-layout view="hHh LpR fFf" style="background-color: #f6f6f6">

    <q-header
      reveal
      class="bg-white text-white"
    >

    <q-toolbar>
      <q-btn
        flat
        dense
        icon="arrow_back"
        text-color="blue"
        class="q-mr-sm"
        :to="{name: 'Carrinho'}"
      />
    </q-toolbar>

    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
