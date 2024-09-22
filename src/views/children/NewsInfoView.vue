<script setup lang="ts">
  import { ref } from "vue";
  import { useRoute } from "vue-router";
  import { store } from "@/store";
  const route = useRoute();
  const newId = route.params.id;
  const news = store.newsState.state.value[newId];
</script>
<template>
  <div class="container">
    <div class="content">
      <div class="info-vacancy">
        <p class="title">
          <strong>{{ `${news.title}` }}</strong>
          <p class="date">{{ `${news.date}` }}</p>
        </p>
        <p>{{ `${news.description}` }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.date{
  font-size: 1rem;
}
</style>
