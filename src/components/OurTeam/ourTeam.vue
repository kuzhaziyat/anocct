<script setup lang="ts">
  function to_up() {
    window.scrollTo(0, 0);
  }
</script>
<template>
  <div class="our-team">
    <p class="title">Наша команда</p>
    <div class="parent">
      <p class="subtitle"><strong>Руководство</strong></p>
      <div class="team-row">
        <div class="team-item">
          <img :src="require(`@/assets/img/photo/AndreyAleksandrovich.svg`)" alt="logo" />
          <p><strong>Директор</strong></p>
          <p>
            <strong>Шалчима</strong> <br />
            Андрей Александрович
          </p>
        </div>
      </div>
      <div class="team-row">
        <div class="team-item">
          <img :src="require(`@/assets/img/photo/ErtineEres-oolovich.svg`)" alt="logo" />
          <p><strong>Первый заместитель директора</strong></p>

          <p>
            <strong>Монгуш </strong> <br />
            Эртине Эрес-оолович
          </p>
        </div>
        <div class="team-item">
          <img :src="require(`@/assets/img/photo/AziataMonguchevna.svg`)" alt="logo" />
          <p><strong>Заместитель директора</strong></p>
          <p>
            <strong>Хертеш</strong> <br />
            Азията Монгушевна
          </p>
        </div>
      </div>
      <p class="subtitle"><strong>Отдел разработки информационных систем</strong></p>
      <div class="team-row">
        <div class="team-item">
          <img :src="require(`@/assets/img/photo/SergeyBorisovich.svg`)" alt="logo" />
          <p><strong>Full-stack разработчик</strong></p>
          <p>
            <strong>Чыдым</strong> <br />
            Сергей Борисович
          </p>
        </div>
        <div class="team-item">
          <img :src="require(`@/assets/img/photo/aziyat.svg`)" alt="logo" />
          <p><strong>Разработчик мобильных приложений</strong></p>
          <p>
            <strong>Кужугет</strong> <br />
            Азият Сылдыс-оолович
          </p>
        </div>
        <div class="team-item">
          <img :src="require(`@/assets/img/photo/AdilaHeymerovna.svg`)" alt="logo" />
          <p><strong>UX/UI дизайнер</strong></p>
          <p>
            <strong>Донгак</strong> <br />
            Адиля Хеймеровна
          </p>
        </div>
        <div class="team-item">
          <img :src="require(`@/assets/img/photo/SayanaOrlanovna.svg`)" alt="logo" />
          <p><strong>UX/UI дизайнер</strong></p>
          <p>
            <strong>Сотпа</strong> <br />
            Саяна Орлановна
          </p>
        </div>
      </div>
      <div class="team-row">
        <router-link :to="{ name: 'vacancy' }" @click="to_up()"><p>Присоединяйся к нашей команде</p></router-link>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .parent {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 1.5rem;
    font-size: 1.3rem;
    & p {
      margin: 0;
    }
    .team-row {
      display: flex;
      justify-content: center;
      align-items: baseline;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 2rem;
      .team-item {
        display: flex;
        justify-items: baseline;
        flex-direction: column;
      }
    }
    & a {
      font-size: 1.5rem;
      color: var(--text-color);
      &:hover {
        color: var(--text-hover-color);
      }
    }
  }
  @media (max-width: 768px) {
    .team-item {
      width: 44%;
      gap: 1rem;
      & img {
        width: 100%;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1025px) {
    .team-item {
      width: 40%;
      gap: 1rem;
      & img {
        width: 80%;
      }
    }
  }
  @media (min-width: 1025px) {
    .team-item {
      width: 40%;
      gap: 1rem;
      & img {
        width: 80%;
      }
    }
  }
</style>
