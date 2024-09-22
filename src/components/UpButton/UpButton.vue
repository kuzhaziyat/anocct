<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from "vue";

  const showButton = ref(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    showButton.value = window.scrollY > 100;
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
</script>

<template>
  <button :class="{ 'show-button': showButton }" @click="scrollToTop" class="scroll-to-top">
    <img :src="require(`@/assets/img/icon/upIcon.svg`)" />
  </button>
</template>

<style scoped lang="scss">
  .scroll-to-top {
    position: fixed;

    background: none;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    transition: opacity 0.3s, visibility 0.3s;
    opacity: 0;
    visibility: hidden;
    & img {
      width: 3rem;
      box-shadow: 0px 0px 5px 0px var(--primary-background-color);
      border-radius: 50%;
    }
  }

  .show-button {
    opacity: 1;
    visibility: visible;
  }
  @media (max-width: 768px) {
    .scroll-to-top {
      bottom: 1rem;
      right: 1rem;
      & img {
        width: 2rem;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .scroll-to-top {
      bottom: 2rem;
      right: 2rem;
      & img {
        width: 3rem;
      }
    }
  }

  @media (min-width: 1024px) {
    .scroll-to-top {
      bottom: 2rem;
      right: 2rem;
      & img {
        width: 3rem;
      }
    }
  }
</style>
