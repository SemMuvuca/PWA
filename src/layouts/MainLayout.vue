<template>
  <q-layout view="hHh LpR fFf">

    <q-header
      reveal
      elevated
      class="bg-primary text-white"
      height-hint="98"
    >
      <div class="fit row wrap justify-end items-start content-start">
        <q-btn
          flat
          color="white"
          to="/sobreNos"
          icon="info"
          label="Sobre nós"
        />
      </div>
      <q-footer
        bordered
        class="bg-white text-primary"
      >
        <q-tabs
          keep-alive
          align="center"
        >
          <q-route-tab
            icon="shopping_cart"
            :to="{name: 'Carrinho'}"
            label="Carrinho"
          />
          <q-route-tab
            icon="photo_camera"
            :to="{name: 'Main'}"
            label="Scanner"
          />
          <!-- <q-route-tab
            icon="help"
            :to="{name: 'Tutorial', params: {userId: 'a'}}"
            label="Como Usar"
          /> -->
        </q-tabs>
      </q-footer>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
