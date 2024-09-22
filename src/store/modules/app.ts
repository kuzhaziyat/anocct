import { ref } from "vue";
import iStore from "@/types/iStore";
export const appState: iStore.AppState = {
  state: ref({
    mobileMenu: false,
  }),
};
