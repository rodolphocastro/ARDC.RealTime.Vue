<template>
  <div>
    <header class="sticky row">
      <div class="col-sm-12 col-md-12 col-lg-10 col-lg-offset-1">
        <a href="#" class="logo">ARDC Realtime</a>
        <a href="index.html" class="button">Home</a>
        <a href="https://github.com/rodolphocastro" class="button">My GitHub</a>
        <a href="#" v-on:click.prevent="displaySettings" class="button">Variáveis de Ambiente</a>
      </div>
    </header>
    <div class="container">
      <!-- TODO: Adicionar conteúdo do App -->
      <broadcasts-section></broadcasts-section>
    </div>
  </div>
</template>

<script>
import BroadcastsSection from "./components/BroadcastsSection";

export default {
  name: "app",
  components: {
    BroadcastsSection
  },
  computed: {
    /**
     * Variáveis de ambiente do App.
     * @returns {string} Uma string contendo as variaveis de ambiente concatenadas
     */
    envSettings() {
      let apiUrl = process.env.VUE_APP_API;
      let broadcastUrl = process.env.VUE_APP_BROADCAST_HUB;
      let messagesUrl = process.env.VUE_APP_MESSAGE_HUB;
      return `Api: ${apiUrl}\nBroadcasts: ${broadcastUrl}\nMessages: ${messagesUrl}`;
    }
  },
  methods: {
    /**
     * Exibe as configurações do ambiente para o usuário.
     */
    displaySettings() {
      alert(this.envSettings);
    }
  }
};
</script>

<style>
</style>
