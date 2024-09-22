<template>
  <div class="banner">
    <img :src="require(`@/assets/img/homeBanner.svg`)" alt="logo" />
    <p>
      Автономная некоммерческая организация «Центр фицровой транформации Республики Тыва» - экспертный центр в области ИТ и цифровой трансформации в Тыве. Развиваем передовые
      технологии, помогаем внедрять цифровые сервисы в органы власти, повышаем цифровую грамотность населения и готовим новое поколение специалистов. Наша цель — сделать республику
      лидером цифрового прогресса. Присоединяйтесь к нам для совместного творчества и изменений!
    </p>
  </div>
</template>
<style scoped lang="scss">
  .banner {
    & img {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    .banner {
      & img {
        display: none;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1025px) {
    .banner {
      & p {
        display: none;
      }
    }
  }
  @media (min-width: 1025px) {
    .mobile-but {
      display: none;
    }
    .banner {
      & p {
        display: none;
      }
    }
  }
</style>
