<script setup lang="ts">
  import { MainHeader, MainFooter, MobileMenu } from "@/widgets";
  import { UpButton } from "./components";
  import { onMounted, ref } from "vue";
  import { store } from "./store";
  const activeMenu = ref(store.appState.state.value.mobileMenu);

  onMounted(() => {
    // Добавляем метатег в заголовок документа
    const meta = document.createElement("meta");
    meta.setAttribute("name", "viewport");
    meta.setAttribute("content", "width=device-width,initial-scale=1.0");
    document.head.appendChild(meta);
  });
</script>
<template>
  <MainHeader />
  <MobileMenu />
  <router-view />
  <MainFooter />
  <UpButton />
</template>

<style lang="scss">
  #app {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
