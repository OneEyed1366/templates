<script lang="ts">
import { useCounter } from '~/store/counter';
import { mapActions, mapState } from 'pinia';

export default {
  computed: {
    ...mapState(useCounter, {
      count: 'value'
    })
  },
  methods: {
    ...mapActions(useCounter, ['increment', 'decrement'])
  }
}
</script>

<template>
  <article>
    CounterComponent! {{ count }}
    <footer class="footer">
      <button @click="increment()" type="button">Increment</button>
      <button @click="decrement()" type="button">Decrement</button>
    </footer>
  </article>
</template>

<style scoped>
.footer button {
  border-radius: 10px;
  padding: 1rem 2rem;
}
</style>
