<script setup lang="ts">
  import { store } from "@/store";

  function toggleMenu() {
    store.appState.state.value.mobileMenu = false;
    window.scrollTo(0, 0);
  }
</script>
<template>
  <router-link :to="{ name: 'home' }" @click="toggleMenu()"> Главная </router-link>
  <router-link :to="{ name: 'news' }" @click="toggleMenu()"> Новости </router-link>
  <router-link :to="{ name: 'reception' }" @click="toggleMenu()"> Интернет - приемная </router-link>
  <router-link :to="{ name: 'document' }" @click="toggleMenu()"> Документы </router-link>
</template>
<style lang="scss"></style>
