<script setup lang="ts">
  import { ref, computed } from "vue";
  import { useRouter } from "vue-router";
  import { store } from "@/store";
  const router = useRouter();
  function navigateToRoute(routeName: string, params?: any) {
    router.push({ name: routeName, params: params });
  }
  const newsValue = store.newsState.state.value;
  const currentPage = ref(1);
  const currentArrPages = ref(1);
  const itemsPerPage = 3;
  const buttonsPerPage = 5;

  const paginatedData = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return newsValue.slice(startIndex, endIndex);
  });

  const totalPages = computed<number>(() => {
    return Math.ceil(newsValue.length / itemsPerPage);
  });
  const arrPages: number[] = Array.from({ length: totalPages.value }, (_, index) => index + 1);

  const pagedData = computed(() => {
    const startIndex = (currentArrPages.value - 1) * buttonsPerPage;
    const endIndex = startIndex + buttonsPerPage;
    return arrPages.slice(startIndex, endIndex);
  });
  const totalArrPages = computed<number>(() => {
    return Math.ceil(arrPages.length / buttonsPerPage);
  });
  const changePage = (pageNumber: number) => {
    currentPage.value = pageNumber;
  };
  function nextPage() {
    if (currentArrPages.value < totalArrPages.value) {
      currentArrPages.value = currentArrPages.value + 1;
    }
  }
  function prevPage() {
    if (currentArrPages.value > 1) {
      currentArrPages.value = currentArrPages.value - 1;
    }
  }
</script>
<template>
  <div class="container">
    <div class="content">
      <div>
        <p class="title">Новости</p>
        <div class="list-news">
          <div v-for="item in paginatedData" :key="item.id" @click="navigateToRoute('newsInfo', { id: item.id })" class="news">
            <div class="top-news">
              <p>
                <strong>{{ `${item.title}` }}</strong>
              </p>
              <p class="description">{{ `${item.description}` }}</p>
            </div>
            <p>{{ `${item.date}` }}</p>
          </div>
        </div>
        <div class="pagination">
          <p class="pagination-item" @click="prevPage()"><img :src="require(`@/assets/img/icon/leftArrow.svg`)" alt="" /></p>
          <p :class="{ 'pagination-item': true, 'active-page': pageNumber === currentPage }" v-for="pageNumber in pagedData" :key="pageNumber" @click="changePage(pageNumber)">
            {{ pageNumber }}
          </p>
          <p class="pagination-item" @click="nextPage()"><img :src="require(`@/assets/img/icon/rightArrow.svg`)" alt="" /></p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .list-news {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .news {
    background-color: var(--background-color);
    color: var(--primary-text-color);
    padding: 0.5rem 2rem;
    border-radius: 1rem;
    font-size: 1.3rem;
    cursor: pointer;
    &:hover {
      background-color: var(--background-hover-color);
    }
  }
  .description {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .pagination {
    display: flex;
    gap: 1rem;
    justify-content: center;
    .pagination-item {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-style: none;
      padding: 0.7rem;
      border-radius: 100%;
      height: 1rem;
      width: 1rem;
      background-color: var(--background-highlight-color);
      &:hover {
        background-color: var(--background-hover-highlight-color);
      }
    }
    .active-page {
      background-color: var(--primary-color) !important;
    }
  }
</style>
