<script setup lang="ts">
  import { ref } from "vue";
  import { store } from "@/store";
  import { mainMenu } from "@/components";

  function toggleMenu() {
    store.appState.state.value.mobileMenu = !store.appState.state.value.mobileMenu;
  }
</script>
<template>
  <div class="mobile-menu" :class="{ visible: store.appState.state.value.mobileMenu }">
    <div class="top-menu">
      <p><strong>Меню</strong></p>
      <button @click="toggleMenu()"><img :src="require(`@/assets/img/icon/X.svg`)" alt="logo" /></button>
    </div>
    <div class="main-menu"><mainMenu></mainMenu></div>
  </div>
</template>
<style lang="scss" scoped>
  .mobile-menu {
    position: fixed;
    background-color: var(--background-color);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    z-index: 10000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0s linear 1s;
    .top-menu {
      padding: 0.5rem 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.3rem;
      color: var(--primary-text-color);
      & button {
        border-style: none;
        background-color: var(--background-highlight-color);
        padding: 0;
        border-radius: 0.5rem;
        & img {
          width: 1.5rem;
          margin: 0.5rem;
        }
        &:active {
          background-color: var(--background-hover-highlight-color);
        }
      }
    }
    .main-menu {
      margin: 2rem;
      width: var(--mobile-content-size);
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: start;
      ::v-deep a {
        width: 90%;
        padding: 2rem 0.5rem;
        color: var(--primary-text-color);
        text-decoration: none;
        font-size: 1rem;
        border-bottom: 0.1rem solid var(--primary-text-color);
      }
    }
  }
  .visible {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s ease, visibility 0s linear;
  }
</style>
