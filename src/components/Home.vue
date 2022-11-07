<script>
export default{
    props: {coin: {type: Object}},

}
</script>

<template>
<div class="md:container md:mx-auto mt-6">
  <div class="flex flex-row flex-nowrap border-solid border-4 mb-8 p-8 items-center rounded text-center" v-for="(coins, index) in coin" :key="index">
    <div class="flex-1"><img :src="coins.image" alt="" class="logoImg"></div>
    <div class="flex-1">
      <div><span class="font-bold"> {{coins.id}} </span></div>
      <div>({{coins.symbol}})</div>
    </div>
    <div class="flex-1">R$: {{coins.current_price}}</div>
    <div class="flex-1"> 
      <div><span class="font-bold">Low-24H:</span></div>
      <div>{{coins.low_24h}}</div>
    </div>
    <div class="flex-1">
      <div><span class="font-bold">High-24:</span></div>
      <div>{{coins.high_24h}}</div>
    </div>
    <div class="flex-1">
      <div><span class="font-bold"> Percentage 24H:</span></div>
      <div class="border-solid border-2 rounded-xl">{{coins.price_change_percentage_24h}}</div>
    </div>
  </div>  
</div>
</template>

<style scoped>
.logoImg{
  width: 50px;
}

</style>
