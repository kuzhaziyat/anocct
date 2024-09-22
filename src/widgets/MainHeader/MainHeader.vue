<script setup lang="ts">
  import { ref } from "vue";
  import { store } from "@/store";
  import { mainMenu } from "@/components";
  function toggleMenu() {
    store.appState.state.value.mobileMenu = !store.appState.state.value.mobileMenu;
  }
</script>
<template>
  <div class="header">
    <div class="top-header">
      <div class="logo">
        <router-link :to="{ name: 'home' }">
          <img :src="require(`@/assets/img/logo/headerLogo.svg`)" alt="logo" />
        </router-link>
        <router-link :to="{ name: 'home' }">
          <p class="head-title">
            Центр цифровой трансформации <br />
            Республики Тыва
          </p>
        </router-link>
        <router-link :to="{ name: 'home' }">
          <p class="mobile-head-title">АНО ЦЦТ РТ</p>
        </router-link>
      </div>
      <div class="icon"></div>
      <div class="mobile-menu-but">
        <button @click="toggleMenu()"><img :src="require(`@/assets/img/icon/menuButton.svg`)" alt="logo" /></button>
      </div>
    </div>
    <div class="main-menu">
      <mainMenu></mainMenu>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .header {
    width: 100%;
    display: flex;
    background-color: var(--background-color);
    align-items: center;
    box-shadow: 0px 5px 5px -5px var(--primary-background-color);
    .top-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      .head-title {
        font-family: "Golos-Medium", serif;
      }
      a {
        background: none !important;
        text-decoration: none;
      }
    }
  }
  @media (max-width: 768px) {
    .header {
      position: sticky;
      z-index: 1000;
      top: 0;
      .main-menu {
        display: none;
      }
    }
    .top-header {
      width: var(--mobile-content-size);
      padding: 0.5rem 0;
      margin: 0 auto;
      .mobile-menu-but {
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
      .logo {
        display: flex;
        align-items: center;
        gap: 1rem;
        & p {
          font-size: 1.2rem;
          color: var(--primary-text-color);
        }
        & img {
          width: 3rem;
        }
        .head-title {
          display: none;
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1025px) {
    .header {
      font-size: 1rem;
      flex-shrink: 0;
      flex-direction: column;
      padding-bottom: 1rem;
    }
    .top-header {
      width: var(--table-content-size);
      padding: 1rem;

      .mobile-menu-but {
        display: none;
      }
      .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        & p {
          font-size: 2rem;
          color: var(--primary-text-color);
        }
        & img {
          width: 7rem;
        }
      }
      .mobile-head-title {
        display: none;
      }
    }
    ::v-deep .router-link-active {
      background-color: var(--primary-background-color) !important;
      border-radius: 1rem;
    }
    .main-menu {
      align-items: center;
      display: flex;
      width: var(--table-content-size);
      justify-content: space-evenly;
      border-top: 0.2rem solid var(--background-highlight-color);
      padding-top: 1rem;
      gap: 1rem;
      ::v-deep a {
        text-align: center;
        flex-grow: 1;
        max-width: 15rem;
        text-decoration: none;
        color: var(--text-color);
        background-color: var(--primary-color);
        padding: 0.5rem;
        border-radius: 1rem;
        &:hover {
          cursor: pointer;
          background-color: var(--primary-background-color) !important;
        }
      }
    }
  }
  @media (min-width: 1025px) {
    .header {
      font-size: 1rem;
      flex-shrink: 0;
      flex-direction: column;
      padding-bottom: 1rem;
    }
    .top-header {
      width: var(--pc-content-size);
      padding: 1rem;

      .mobile-menu-but {
        display: none;
      }
      .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        & p {
          font-size: 2rem;
          color: var(--primary-text-color);
        }
        & img {
          width: 7rem;
        }
      }
      .mobile-head-title {
        display: none;
      }
    }
    ::v-deep .router-link-active {
      background-color: var(--primary-background-color) !important;
      border-radius: 1rem;
    }
    .main-menu {
      align-items: center;
      display: flex;
      width: var(--pc-content-size);
      justify-content: space-evenly;
      border-top: 0.2rem solid var(--background-highlight-color);
      padding-top: 1rem;
      gap: 1rem;
      ::v-deep a {
        text-align: center;
        flex-grow: 1;
        max-width: 15rem;
        text-decoration: none;
        color: var(--text-color);
        background-color: var(--primary-color);
        padding: 0.5rem;
        border-radius: 1rem;
        &:hover {
          cursor: pointer;
          background-color: var(--primary-background-color) !important;
        }
      }
    }
  }
</style>
