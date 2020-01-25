<template>
  <div>
    <div class="row">
      <h2>
        Broadcasts
        <small>Mensagens enviadas pelo servidor para os clients</small>
      </h2>
      <p>Eles podem ser consultados através da API rest, para inicializarmos a lista de broadcasts, ou são recebidos passivamente através do SignalR!</p>
      <p>Abaixo estão os broadcasts presentes na API</p>
    </div>
    <div class="row">
      <!-- TODO: Extrair um component para exibir os broadcasts -->
      <div class="card" v-for="broadcast in broadcasts" v-bind:key="broadcast.id">
        <p>{{broadcast.title}}</p>
        <p>{{broadcast.content}}</p>
        <p>{{broadcast.dthCriacao}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import BroadcastService from "../services/broadcastsService";
const broadcastService = new BroadcastService();

export default {
  name: "BroadcastsSection",
  data: () => {
    return {
      broadcasts: []
    };
  },
  mounted() {
    // Consultar os broadcasts que existem na API ao carregar.
    broadcastService.list(res => (this.broadcasts = res));
  }
};
</script>

<style>
</style>