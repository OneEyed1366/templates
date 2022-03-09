<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import CounterComponent from '@/components/CounterComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: { CounterComponent },
  setup() {
    const { t } = useI18n();

    return {
      t
    };
  },
});
</script>

<template>
  <article class="wrapper">
    {{ t('hello-world') }}
    <CounterComponent />
  </article>
</template>

<style lang="scss" scoped>
.wrapper {}
</style>
