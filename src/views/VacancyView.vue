<script setup lang="ts">
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { store } from "@/store";
  const router = useRouter();
  function navigateToRoute(routeName: string, params?: any) {
    console.log(params);
    router.push({ name: routeName, params: params });
  }
</script>
<template>
  <div class="container">
    <div class="content">
      <div>
        <p class="title">Ваканcии</p>
        <p>Если Вы готовы принять вызов и стать частью нашей дружной команды, ждем Ваше резюме по электронной почте: job@anocct.ru, с указанием в теме письма названия вакансии</p>
        <div class="list-vacancy">
          <div v-for="(vacancy, index) in store.vacancyState.state.value" :key="index" @click="navigateToRoute('vacancyInfo', { id: index })" class="vacancy">
            <div class="top-vacancy">
              <p class="name">
                <strong>{{ `${vacancy.name}` }}</strong>
              </p>
              <p class="salary">{{ `${vacancy.salary}` }}</p>
            </div>
            <p><img :src="require(`@/assets/img/icon/bugIcon.svg`)" alt="logo" /> {{ `${vacancy.experience}` }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .list-vacancy {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .vacancy {
    background-color: var(--background-color);
    color: var(--primary-text-color);
    padding: 0.5rem 2rem;
    border-radius: 1rem;
    font-size: 1.3rem;
    cursor: pointer;
  }
  .top-vacancy {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 2rem;
    .name {
      text-align: start;
    }
    .salary {
      text-align: end;
      width: 35%;
    }
  }
</style>
