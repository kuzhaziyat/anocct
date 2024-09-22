<script setup lang="ts">
  import { ref, computed } from "vue";
  import { useRouter } from "vue-router";
  import { store } from "@/store";
  import { ourTeam, HomeBunner } from "@/components";
  const newsValue = store.newsState.state.value;
  const projectValue = store.projectState.state.value;

  const counterProjectSlider = ref<number>(0);
  const projectSlider = ref<string>("projectSlider");

  const counterNewsSlider = ref<number>(0);
  const NewsSlider = ref<string>("NewsSlider");

  const router = useRouter();

  function navigateToRoute(routeName: string, params?: any) {
    router.push({ name: routeName, params: params });
  }

  const paginatedData = computed(() => {
    const startIndex = newsValue.length - 6;
    const endIndex = newsValue.length - 1;
    return newsValue.slice(startIndex, endIndex);
  });

  function nextSlide(nameSlider: string) {
    if (nameSlider === projectSlider.value) {
      counterProjectSlider.value = (counterProjectSlider.value + 1) % projectValue.length;
    } else if (nameSlider === NewsSlider.value) {
      counterNewsSlider.value = (counterNewsSlider.value + 1) % paginatedData.value.length;
    }
  }

  function prevSlide(nameSlider: string) {
    if (nameSlider === projectSlider.value) {
      counterProjectSlider.value = (counterProjectSlider.value - 1 + projectValue.length) % projectValue.length;
    } else if (nameSlider === NewsSlider.value) {
      counterNewsSlider.value = (counterNewsSlider.value - 1 + paginatedData.value.length) % paginatedData.value.length;
    }
  }
  function goToSlide(index: number, nameSlider: string) {
    if (nameSlider === projectSlider.value) {
      counterProjectSlider.value = index;
    } else if (nameSlider === NewsSlider.value) {
      counterNewsSlider.value = index;
    }
  }
</script>

<template>
  <div class="container">
    <div class="content">
      <HomeBunner />
      <div class="projects">
        <div class="slider">
          <p class="title">Наши проекты</p>
          <div class="slider-content">
            <div class="slides" :style="{ transform: 'translateX(' + -counterProjectSlider * 100 + '%)' }">
              <div class="slide" v-for="(item, index) in projectValue" :key="index">
                <div class="project-item">
                  <div class="project-description">
                    <p class="name">
                      <strong>{{ `${item.name}` }}</strong>
                    </p>
                    <p class="description">{{ `${item.description}` }}</p>
                    <a :href="item.url">Перейти на сайт</a>
                  </div>
                  <img :src="require(`@/assets/img/${item.image}`)" />
                  <a class="mobile-but" :href="item.url">Перейти на сайт</a>
                </div>
              </div>
            </div>
          </div>
          <button class="prev" @click="prevSlide(projectSlider)"><img :src="require(`@/assets/img/icon/leftArrow.svg`)" alt="&lt;" /></button>
          <button class="next" @click="nextSlide(projectSlider)"><img :src="require(`@/assets/img/icon/rightArrow.svg`)" alt="&gt;"</button>
          <div class="dots">
            <span
              class="dot"
              v-for="(slide, index) in projectValue"
              :key="index"
              :class="{ active: index === counterProjectSlider }"
              @click="goToSlide(index, projectSlider)"
            ></span>
          </div>
        </div>
      </div>

      <div class="news">
        <div class="slider">
          <p class="title">Новости</p>
          <div class="slider-content">
            <div class="slides" :style="{ transform: 'translateX(' + -counterNewsSlider * 100 + '%)' }">
              <div class="slide" v-for="(item, index) in paginatedData" :key="index">
                <div @click="navigateToRoute('newsInfo', { id: item.id })" class="news-item">
                  <div class="top-news">
                    <p>
                      <strong>{{ `${item.title}` }}</strong>
                    </p>
                    <p class="description">{{ `${item.description}` }}</p>
                  </div>
                  <p>{{ `${item.date}` }}</p>
                </div>
              </div>
            </div>
          </div>
          <button class="prev" @click="prevSlide(NewsSlider)"><img :src="require(`@/assets/img/icon/leftArrow.svg`)" alt="&lt;" /></button>
          <button class="next" @click="nextSlide(NewsSlider)"><img :src="require(`@/assets/img/icon/rightArrow.svg`)" alt="&gt;"</button>
          <div class="dots">
            <span class="dot" v-for="(slide, index) in paginatedData" :key="index" :class="{ active: index === counterNewsSlider }" @click="goToSlide(index, NewsSlider)"></span>
          </div>
        </div>
      </div>
      <ourTeam />
    </div>
  </div>
</template>
<style scoped lang="scss">
  .news {
    .news-item {
      padding: 1rem 2rem;
      cursor: pointer;
      .description {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .projects {
    .project-item {
      position: relative;
      display: flex;
      justify-content: space-between;
      gap: 2rem;
      padding: 1rem 2rem;
      width: 100%;
      overflow: hidden;
      border-radius: 1rem;
      &::after {
        width: 45rem;
        aspect-ratio: 1/1;
        content: "";
        position: absolute;
        right: 0;
        background-image: url("@/assets/img/icon/Ellipse.svg");
        background-repeat: no-repeat;
        background-position: center center;
        border-radius: 50%;
        z-index: 1;
        transform: translate(50%, -25%);
      }
      .project-description {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 50%;
        z-index: 2;

        & strong {
          font-size: 3rem;
          z-index: 2;
        }
        & a {
          text-decoration: none;
          color: var(--text-color);
          text-align: center;
          padding: 0.7rem;
          border-radius: 1rem;
          background-color: var(--primary-color);
          z-index: 2;
          box-shadow: 0px 0px 5px 0px var(--primary-background-color);
        }
      }
      & img {
        width: 50%;
        z-index: 2;
      }
    }
  }

  .slider {
    position: relative;
    width: 100%;
    .slider-content {
      overflow: hidden;
      .slides {
        display: flex;
        transition: transform 0.5s ease;
        .slide {
          flex: 0 0 100%;
          display: flex;
          background-color: var(--background-color);
          color: var(--primary-text-color);
          border-radius: 1rem;
          font-size: 1.3rem;
        }
      }
    }

    .prev,
    .next {
      position: absolute;
      display: flex;
      top: 50%;
      justify-content: center;
      align-items: center;
      background-color: var(--background-highlight-color);
      border-radius: 10rem;
      border: none;
      cursor: pointer;
    }
    .dots {
      display: flex;
      justify-content: center;
      .dot {
        background-color: var(--background-color);
        cursor: pointer;
        border-radius: 50%;
      }
      .dot.active {
        background-color: var(--primary-color);
      }
    }
  }

  @media (max-width: 768px) {
    .projects {
      .project-item {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem 2rem;
        align-items: center;
        justify-content: space-around;
        .project-description {
          align-items: center;
          & p {
            margin: 0;
          }
          & strong {
            font-size: 2rem;
          }
          & a {
            display: none;
          }
          & .description {
            display: none;
          }
        }
        & img {
          width: 100%;
          z-index: 2;
        }
        & a {
          box-shadow: 0px 0px 5px 0px var(--primary-background-color);
          text-decoration: none;
          color: var(--text-color);
          text-align: center;
          padding: 1rem;
          border-radius: 1rem;
          background-color: var(--primary-color);
        }
        &::after {
          display: none;
        }
      }
    }

    .prev,
    .next {
      opacity: 0;
    }

    .dots {
      padding: 1rem;
    }

    .dot {
      width: 10px;
      height: 10px;
      margin: 0 5px;
    }
  }

  @media (min-width: 768px) and (max-width: 1025px) {
    .mobile-but {
      display: none;
    }

    .prev,
    .next {
      opacity: 0;
    }

    .dots {
      padding: 1rem;
      .dot {
        width: 1rem;
        height: 1rem;
        margin: 0 5px;
      }
    }
  }

  @media (min-width: 1025px) {
    .mobile-but {
      display: none;
    }
    .prev,
    .next {
      width: 3rem;
      height: 3rem;
      padding: 1rem;
    }
    .prev {
      left: -4rem;
    }
    .next {
      right: -4rem;
    }
    .dots {
      padding: 1rem;
    }

    .dot {
      width: 0.5rem;
      height: 0.5rem;
      margin: 0 5px;
    }
  }
</style>
