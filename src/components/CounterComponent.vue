<script lang="ts" setup>

import { useCounter } from '~/store/counter';

const store = useCounter();
</script>

<template>
  <article>
    Count is {{ store.value }}
    <footer>
      <button @click="store.increment()" type="button">Increment</button>
      <button @click="store.decrement()" type="button">Decrement</button>
    </footer>
  </article>
</template>
