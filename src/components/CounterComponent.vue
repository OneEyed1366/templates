<script>

import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'CounterComponent',
  setup() {
    const { value: counterValue } = useStore().state.counter;

    return {
      counterValue,
    };
  },
});
</script>

<template>
  <article class="wrapper">
    Count is {{ counterValue }}
  </article>
</template>

<style lang="scss">

</style>
