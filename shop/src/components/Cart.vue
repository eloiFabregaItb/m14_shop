<script setup lang="ts">
  import type { currencyType, itemCartType } from '@/types';
  import Currency from './Currency.vue';
import { ref } from 'vue';

  const props = defineProps<{
    cartList: itemCartType[]
    currency: currencyType
  }>()

</script>

<template>

  <div class="cart">

    <h3>Carrito</h3>
    <ul>
      <template v-for="item in cartList">
        <li v-if="item.amount>0">
          {{ item.name }} - {{ item.amount }} x <Currency :price="item.price" :currency="currency"/> = <Currency :price="item.price * 2" :currency="currency"/>
        </li>
      </template>
    </ul>
    
    <p>Total:
      <Currency :price="cartList.reduce((acc,item)=>acc+item.amount*item.price,0)" :currency="currency"/>
    </p>
  </div>

</template>

<style scoped>
  .cart{
    position: absolute;
    top: 0;
    right: 0;
    
    padding: 2rem;
    border: 1px solid black;

    
  }
</style>
