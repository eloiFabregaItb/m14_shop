<script setup lang="ts">
  import { currencys } from '@/constants';
import type { currencyType } from '@/types';
import { ref } from 'vue';

  const emit = defineEmits(['changeCurrency'])



    
  function onChange(e:any){
    emit('changeCurrency',currencys.find(x=>x.key===e.target.value))
  }
</script>

<template>
  <select @change="onChange($event)" >    
    <option v-for="curr in currencys" :value="curr.key">{{ curr.key + " - " + curr.name }}</option>
  </select>
</template>

<style scoped>

</style>
