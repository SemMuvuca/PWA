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
        to="/carrinho"
      />
    </q-toolbar>

      <!-- <q-avatar>
        <q-footer
          bordered
          class="bg-white text-primary"
        >
          <q-tabs
            keep-alive
            align="center"
          >
            <q-route-tab
              icon="arrow_back"
              to="/"
              label="voltar"
            />
          </q-tabs>
        </q-footer>
      </q-avatar> -->

    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
