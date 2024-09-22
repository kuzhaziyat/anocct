<script setup lang="ts">
  import { ref } from "vue";

  const surname = ref("");
  const name = ref("");
  const organization = ref("");
  const email = ref("");
  const emailConfirmation = ref("");
  const phone = ref("");
  const message = ref("");

  const submitForm = () => {
    console.log("Фамилия:", surname.value);
    console.log("Имя:", name.value);
    console.log("Наименование организации:", organization.value);
    console.log("Email:", email.value);
    console.log("Номер телефона:", phone.value);
    console.log("Текст обращения:", message.value);
  };
</script>

<template>
  <div class="container">
    <div class="content">
      <p class="title">Интернет-приёмная</p>
      <p class="subtitle">Написать письмо</p>
      <p>Поля, отмеченные <span class="star">*</span> , обязательны для заполнения</p>
      <p>
        Информация о персональных данных авторов обращений, направленных в электронном виде, хранится и обрабатывается с соблюдением требований российского законодательства о
        персональных данных.
      </p>
      <p>В электронной анкете в Вашем обращении укажите:</p>
      <p>кому, Вы его направляете или куда, Вы его направляете</p>
      <form @submit.prevent="submitForm">
        <div class="form-radio">
          <div>
            <input type="radio" name="radio" id="radio" />
            <label for="radio">Директору Центра цифровой трансформации РТ</label>
          </div>
          <div>
            <input type="radio" name="radio" id="radio" />
            <label for="radio">Должностному лицу Центра цифровой трансформации РТ</label>
          </div>
        </div>
        <div class="form-dir">
          <div>
            <input type="text" id="surname" v-model="surname" required />
          </div>
          <div>
            <label for="">В электронной анкете в Вашем обращении укажите в именительном падеже Ваши:</label>
          </div>
          <div>
            <label for="surname">Фамилия:</label>
            <input type="text" id="surname" v-model="surname" required />
          </div>
          <div>
            <label for="name">Имя:</label>
            <input type="text" id="name" v-model="name" required />
          </div>
          <div>
            <label for="organization">Наименование организации (юридического лица):</label>
            <input type="text" id="organization" v-model="organization" />
          </div>
          <div>
            <p>В электронной анкете в Вашем обращении укажите</p>
          </div>
          <div>
            <label for="email">адрес электронной почты, по которому должны быть направлены ответ, уведомление о переадресации Вашего обращения <span class="star">*</span> </label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div>
            <label for="emailConfirmation">Повторите адрес электронной почты для автоматической проверки правильности его заполнения <span class="star">*</span> </label>
            <input type="email" id="emailConfirmation" v-model="emailConfirmation" required />
          </div>
          <div>
            <label for="phone">Номер телефона</label>
            <input type="tel" id="phone" v-model="phone" />
          </div>
          <div>
            <p>
              В соответствии с частью 1 статьи 7 Федерального закона от 2 мая 2006 года № 59-ФЗ «О порядке рассмотрения обращений граждан Российской Федерации» гражданин в своём
              обращении в обязательном порядке излагает суть предложения, заявления или жалобы.
            </p>
            <p>
              Обращаем ваше внимание, что в целях объективного и всестороннего рассмотрения вашего обращения в установленные сроки необходимо в тексте обращения указывать адрес
              описанного вами места действия, факта или события.
            </p>
            <p>
              В случае, если текст вашего обращения не позволяет определить суть предложения, заявления или жалобы, ответ на обращение не даётся и оно не подлежит направлению
              на рассмотрение в государственный орган, орган местного самоуправления или должностному лицу, в соответствии с их компетенцией, о чем вам будет сообщено в течение
              семи дней со дня регистрации обращения.
            </p>
            <p>
              Обращаем ваше внимание, что при написании текста обращения в форме электронного документа в поле ввода текста обращения в форме электронного документа для изложения
              сути предложения, заявления или жалобы отсутствует ограничение по вводимому количеству символов.
            </p>
            <p>В поле ввода текста обращения в форме электронного документа в Вашем обращении:</p>
            <p>изложите суть предложения, заявления или жалобы <span class="star">*</span></p>
            <p></p>
            <label for="message">Текст обращения</label>
            <textarea id="message" v-model="message" required></textarea>
          </div>
          <div class="form-row">
            <input type="checkbox" name="permission" />
            <label for="permission"
              >Даю согласие на обработку и использование персональных данных в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных»</label
            >
          </div>
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
  p {
    margin: 0;
  }
  .star {
    color: red;
  }
  .form-radio {
    display: flex;
    gap: 2rem;
    & div {
      display: flex;
      gap: 1rem;
      & input {
        width: 2rem;
        accent-color: var(--primary-color);
      }
    }
  }
  .form-dir {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 0;
    .form-row {
      flex-direction: row;
      gap: 1rem;
    }
    & div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      & p {
        margin: 0.5rem;
      }
      & input,
      textarea {
        border-radius: 1rem;
        padding: 0.5rem;
      }
      & textarea {
        height: 20rem;
      }
    }
  }
</style>
