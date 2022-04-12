<script setup lang="ts">
import { TestIcon } from "@/assets/icons";
</script>

<template>
  <main id="app">
    <h1>Test</h1>
    <TestIcon />
    <router-view />
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
