<script setup lang="ts">
  import { ref } from 'vue';

  const emit = defineEmits(['submitTitle'])


  const title = ref("The Snazzy Burger")

  function handleEmit(){
    emit('submitTitle',title.value)
  }
</script>

<template>
  <h1>{{ title }}</h1>
  <p>
    <input type="text" v-model="title">
    <button @click="handleEmit">Place Order</button>
  </p>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
