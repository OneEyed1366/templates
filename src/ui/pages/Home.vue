<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "HomeView",
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
});
</script>

<template>
  <article class="wrapper">
    {{ t("hello-world") }}
  </article>
</template>

<style lang="scss" scoped>
.wrapper {
}
</style>
