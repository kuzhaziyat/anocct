import { ref } from "vue";
import iStore from "@/types/iStore";
export const projectState: iStore.projectState = {
  state: ref([
    {
      name: "ServiceDesk",
      description: "Для контроля и автоматизации процессов поручений",
      image: "ServiceDesk.svg",
      url: "https://sdesk.online",
    },
  ]),
};
