<script setup lang="ts">
  import type { currencyType, itemType } from '@/types';
  import Currency from './Currency.vue';
import { ref } from 'vue';

  const props = defineProps<{
    currency: currencyType
    item: itemType
  }>()

  const emit = defineEmits(['addToCart'])

  function handleEmit(){
    emit('addToCart',props.item)
  }
</script>

<template>
  <article class="product">
    <span class="imgFrame" :style="item.img?`background: url(${item.img})`:''" :alt="item.name"></span>
    <p>
      {{ item.name }}.
    </p>
    <small>
      <Currency :price="item.price" :currency="currency"/>
    </small>
    <button @click="handleEmit"> Add to cart</button>
  </article>
</template>

<style scoped>


  .product{
    border: 1px solid black;
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .imgFrame{
    background-color: gray;
    width: 100px;
    height: 100px;
    background-position: center !important;
    border-radius: 5px;
    background-size: cover !important;
  }

  button{
    background-color: darkcyan;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: .4rem;
  }
  

  button:hover{
    color: black;
    background-color: aqua;

  }
</style>
