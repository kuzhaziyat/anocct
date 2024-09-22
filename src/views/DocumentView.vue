<script setup lang="ts">
  import { store } from "@/store";
  const documentValue = store.documentState.state.value;
</script>
<template>
  <div class="container">
    <div class="content">
      <p class="title">Документы</p>
      <div class="document-list">
        <p v-for="(item, index) in documentValue" :key="index">
          <img :src="require(`@/assets/img/icon/${item.image}`)" />
          &nbsp;
          <a :href="`${item.url}`">{{ `${item.name}` }} </a>
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .document-list {
    & p {
      display: flex;
      align-items: center;
      & img {
        aspect-ratio: 1/1;
      }
      & a {
        color: var(--text-color);
      }
    }
  }
  @media (max-width: 768px) {
    .document-list {
      & p {
        gap: 0.5rem;
        & img {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
  @media (min-width: 768px) {
    .document-list {
      & p {
        gap: 1rem;
        & img {
          width: 3rem;
          height: 3rem;
        }
      }
    }
  }
</style>
