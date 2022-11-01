<script >
import Home from './components/Home.vue';
import api from './servidor/api.js';
import { onMounted, reactive, toRefs } from 'vue';

export default {
  name: 'App',
  components: {
    Home
  },
  setup(){
    const data = reactive ({
      name: {},
    });
    onMounted( async()=>{
      const response = await api.all();
      console.log(response)
      data.name = response.data;
    })
    return { ...toRefs(data)}
  }
}
</script>

<template>
  <div class="card">
    <Home :name="name" />
  </div>
</template>



<style scoped>
.card{
  padding: 25px;
  border: 1px solid red;

}
</style>
