<template>
  <div class="q-pa-md q-gutter-sm">
    <q-card
      class="my-card"
      flat
      bordered
    >
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="../../public/images/fake_raposo.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Caio Raposo</q-item-label>
          <q-item-label caption>
            The docs guy
          </q-item-label>
        </q-item-section>

        <q-item-section>
          <q-btn
            rounded
            @click="abrirURL('https://github.com/caioraposo')"
          >
            <q-icon name="fab fa-github" />
          </q-btn>
        </q-item-section>
        <q-item-section>
          <q-btn
            rounded
            @click="abrirURL('https://maraoz.com/2020/12/23/bye-social-media/')"
          >
            <q-icon name="fab fa-linkedin" />
          </q-btn>
        </q-item-section>
      </q-item>
    </q-card>

    <q-card
      class="my-card"
      flat
      bordered
    >
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="../../public/images/berg_emocionado.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Daniel Berg</q-item-label>
          <q-item-label caption>
            The back-end guy
          </q-item-label>
        </q-item-section>
        <q-item-section>
          <q-btn
            rounded
            @click="abrirURL('https://github.com/masterberg')"
          >
            <q-icon name="fab fa-github" />
          </q-btn>
        </q-item-section>
        <q-item-section>
          <q-btn
            rounded
            @click="abrirURL('https://www.linkedin.com/in/masterberg/')"
          >
            <q-icon name="fab fa-linkedin" />
          </q-btn>
        </q-item-section>
      </q-item>

      <q-separator />
    </q-card>

    <q-card
      class="my-card"
      flat
      bordered
    >
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="../../public/images/numi.jpg.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Matheus Henrique</q-item-label>
          <q-item-label caption>
            The media guy
          </q-item-label>
        </q-item-section>
        <q-item-section>
          <q-btn
            rounded
            @click="abrirURL('https://github.com/Blindrr')"
          >
            <q-icon name="fab fa-github" />
          </q-btn>
        </q-item-section>
        <q-item-section>
          <q-btn
            rounded
            @click="abrirURL('https://www.linkedin.com/in/matheus-henrique-mr')"
          >
            <q-icon name="fab fa-linkedin" />
          </q-btn>
        </q-item-section>
      </q-item>
    </q-card>

    <q-card
      class="my-card"
      flat
      bordered
    >
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="../../public/images/jew_tongo.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Thiago Silva</q-item-label>
          <q-item-label caption>
            The jack of all trades
          </q-item-label>
        </q-item-section>
        <q-item-section>
          <q-btn
            rounded
            @click="abrirURL('https://github.com/JamesUNT')"
          >
            <q-icon name="fab fa-github" />
          </q-btn>
        </q-item-section>
        <q-item-section>
          <q-btn
            rounded
            @click="abrirURL('https://www.linkedin.com/in/thiago-augusto-silva-ab207118a')"
          >
            <q-icon name="fab fa-linkedin" />
          </q-btn>
        </q-item-section>
      </q-item>
    </q-card>

    <q-card
      class="my-card"
      flat
      bordered
    >
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="../../public/images/algodoal_tiago.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Tiago Lopes</q-item-label>
          <q-item-label caption>
            The front-end guy
          </q-item-label>
        </q-item-section>
        <q-item-section>
          <q-btn
            rounded
            @click="abrirURL('https://github.com/Tiagolm')"
          >
            <q-icon name="fab fa-github" />
          </q-btn>
        </q-item-section>
      </q-item>
    </q-card>
    <q-card
      class="my-card"
      flat
      bordered
    >
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="../../public/images/furro.jpeg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Dusry Baihu</q-item-label>
          <q-item-label caption>
            The full-stack furry
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-card>
  </div>
</template>

<script>
import { openURL } from 'quasar'
export default {
  methods: {
    abrirURL (url) {
      openURL(url)
    }
  }

}
</script>
