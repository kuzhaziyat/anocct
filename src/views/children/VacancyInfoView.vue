<script setup lang="ts">
  import { ref } from "vue";
  import { useRoute } from "vue-router";
  import { store } from "@/store";
  const route = useRoute();
  const vacancyId = route.params.id;
  const vacancy = store.vacancyState.state.value[vacancyId];
</script>
<template>
  <div class="container">
    <div class="content">
      <div class="info-vacancy">
        <p class="title"><strong>Ваканcии</strong></p>
        <div class="top-vacancy">
          <p>
            <strong>{{ `${vacancy.name}` }}</strong>
          </p>
          <p>{{ `${vacancy.salary}` }}</p>
        </div>
        <div>
          <p>Требуемый опыт: {{ `${vacancy.experience}` }}</p>
          <p>{{ `${vacancy.employment}` }}</p>
        </div>
        <div>
          <p><strong>Обязанности:</strong></p>
          <p v-for="(duties, index) in vacancy.duties" :key="index">{{ `${duties}` }}</p>
        </div>
        <div>
          <p><strong>Требование:</strong></p>
          <p v-for="(requirements, index) in vacancy.requirements" :key="index">{{ `${requirements}` }}</p>
        </div>
        <div>
          <p><strong>Условия:</strong></p>
          <p v-for="(conditions, index) in vacancy.conditions" :key="index">{{ `${conditions}` }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .info-vacancy {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & p {
      margin: 0;
    }
  }
  .top-vacancy {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 2rem;
  }
</style>
