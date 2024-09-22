<script setup lang="ts"></script>

<template>
  <div class="footer">
    <div class="footer-info">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Af413772928112727752b973b8f74dacdac2c79bc96b1b7f5483c6a9eaf2412de&amp;source=constructor"
        frameborder="0"
      ></iframe>

      <div class="info">
        <p><strong>Контактная информация</strong></p>
        <p><strong>Телефон:</strong> <span>+ 7 (394-22) 9-77-08</span></p>
        <p><strong>Эл. почта:</strong> <span> info@anocct.ru </span></p>
        <p>
          <strong>Адрес:</strong>
          <span>
            667000, Республика Тыва, г. Кызыл,<br />
            ул. Красноармейская, д. 100, каб.306
          </span>
        </p>
        <p>
          <strong> Режим работы: </strong> <br />
          <span>
            ПН-ПТ 09:00 - 18:00<br />
            Перерыв 13:00-14:00<br />
            СБ-ВС выходной
          </span>
        </p>
        <div>
          <img :src="require(`@/assets/img/icon/iconTG.svg`)" alt="logo" />
          <img :src="require(`@/assets/img/icon/iconVK.svg`)" alt="logo" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .footer {
    font-size: 1rem;
    flex-shrink: 0;
    width: 100%;
    background-size: 37rem;
    background-color: var(--background-color);
    color: var(--primary-text-color);
    background-repeat: no-repeat;
    background-position: 107% -10%;
    background-image: url("@/assets/img/logo/footerLogo.svg");
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .footer-info {
    gap: 2rem;
    display: flex;
    flex-direction: row;
    & iframe {
      border-radius: 1rem;
    }
    .info {
      & p {
        margin: 0.7rem 0;
        & span {
          font-weight: 400;
        }
      }
      & p:nth-child(1) {
        font-size: 1.3rem;
      }
      & div {
        display: flex;
        gap: 1rem;
        & img:hover {
          border-radius: 10rem;
          cursor: pointer;
          background-color: var(--background-highlight-color);
        }
      }
    }
  }
  @media (max-width: 768px) {
    .footer {
      background-image: none;
    }
    .footer-info {
      padding: 1rem;
      width: 100%;
      background-size: 37rem;
      flex-direction: column;
      & iframe {
        display: none;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .footer-info {
      padding: 1rem;
      width: var(--tablet-content-size);
      background-size: 37rem;
      & iframe {
        width: 60%;
        height: 100%;
      }
    }
  }

  @media (min-width: 1024px) {
    .footer-info {
      padding: 1rem;
      width: var(--pc-content-size);
      background-size: 37rem;
      & iframe {
        width: 60%;
        height: 100%;
      }
    }
  }
</style>
