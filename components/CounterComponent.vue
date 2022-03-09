<script lang="ts">
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      computedValue: 'counter/doubleValue'
    })
  }
}
</script>

<template>
  <article>
    CounterComponent! {{ computedValue }}
  </article>
</template>
