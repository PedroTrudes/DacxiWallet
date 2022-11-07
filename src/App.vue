<template>
  <main>
    <div class="conteudo ">
      <Header />
      <Home :coin="coin" />
    </div>
  </main>
</template>

<script >
import Home from './components/Home.vue';
import Header from './components/Header.vue';
import api from './servidor/api.js';

import { onMounted, reactive, toRefs } from 'vue';

export default {
  name: 'App',
  components: {
    Home,
    Header
  },
  setup(){
    const data = reactive({
      coin: {},

    });
    onMounted(async()=>{
      const response = await api.getCoin();
      console.log(response);
      data.coin = response.data;
    })
    return {...toRefs(data)}

  }
}
</script>

<style scoped>
.conteudo{
  background-color: rgb(10, 45, 97);
}
</style>
