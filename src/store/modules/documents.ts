import { ref } from "vue";
import iStore from "@/types/iStore";
export const documentState: iStore.documentState = {
  state: ref([
    {
      name: 'Устав Автономной Некоммерческой Организации "Центр Цифровой Трансформации Республика Тыва"',
      image: "pdfIcon.svg",
      url: "https://disk.yandex.ru/i/Xx--4Lilx79oLw",
    },
    {
      name: "ServiceDesk",
      image: "urlIcon.svg",
      url: "https://sdesk.ru",
    },
    {
      name: "ServiceDesk",
      image: "urlIcon.svg",
      url: "https://sdesk.ru",
    },
  ]),
};
