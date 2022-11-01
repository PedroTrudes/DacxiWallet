<script>
export default{
    props: {name: {type: Object, required:true}},

}
</script>

<template>
   <table class="table-fixed">
  <thead>
    <tr>
      <th class="w-1/1 ...">Cod</th>
      <th class="w-1/2 ...">Nome</th>
      <th class="w-1/2 ...">Valor</th>
      <th class="w-1/1 ...">Variação</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(names, key) in name" :key="key">
      <td>{{key}}</td>
      <td>{{names.id}}</td>
      <td>{{names.name}}</td>
      <td>{{names.symbol}}</td>
    </tr>
  </tbody>
</table>
</template>

<style scoped>
</style>
