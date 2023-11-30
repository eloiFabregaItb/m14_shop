<script setup lang="ts">
import Title from './components/Title.vue'
import Product from './components/Product.vue'
import CurrencySelector from './components/CurrencySelector.vue'
import Cart from './components/Cart.vue'
import type { currencyType, itemType, itemCartType} from './types'
import { ref } from 'vue'
import { currencys, items} from './constants'

  const currency = ref(currencys[0])

  const cart = ref<itemCartType[]>(items.map(x=>({...x,amount:0})))

  function handleNewTitle(title:string){
    alert("NEW TITLE " + title)
  }

  function handleAddToCart(item:itemType){
    alert("ITEM "+item.name+" added to cart")
    const it = cart.value.find(x=>x.id===item.id)
    if(it){
      it.amount++
    }
  }

  function handleChangeCurrency(curr:currencyType){
    currency.value=curr;
  }



</script>

<template>

  <Title @submitTitle="handleNewTitle"/>

  <CurrencySelector @changeCurrency="handleChangeCurrency" />

  <section class="itemList">
    <Product v-for="item in items"
      :currency="currency"
      :item="item"
      @addToCart="handleAddToCart"
    />

  </section>
  
  <Cart :cartList="cart" :currency="currency" />

</template>

<style scoped>
  .itemList{
    display: grid;
    gap:1rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
</style>
