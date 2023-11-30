<script setup lang="ts">
  import type { currencyType, itemType } from '@/types';

  const props = defineProps<{
    currency: currencyType
    price:number
  }>()

</script>

<template>
  {{ (price*currency.value).toFixed(2) }}{{ currency.key }}
</template>

<style scoped>

</style>
