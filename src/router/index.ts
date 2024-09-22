import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import DocumentView from "@/views/DocumentView.vue";
import ReceptionBetaView from "@/views/ReceptionBetaView.vue";
import ReceptionView from "@/views/ReceptionView.vue";
import NewsView from "@/views/NewsView.vue";
import VacancyView from "@/views/VacancyView.vue";
import VacancyInfoView from "@/views/children/VacancyInfoView.vue";
import NewsInfoView from "@/views/children/NewsInfoView.vue";
import SendMailReception from "@/views/children/SendMailReception.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/document",
    name: "document",
    component: DocumentView,
  },
  {
    path: "/reception",
    name: "reception",
    component: ReceptionView,
  },
  {
    path: "/reception/sendmail",
    name: "sendmail",
    component: SendMailReception,
  },
  {
    path: "/news",
    name: "news",
    component: NewsView,
  },
  {
    path: "/news/:id",
    name: "newsInfo",
    component: NewsInfoView,
  },
  {
    path: "/vacancy",
    name: "vacancy",
    component: VacancyView,
    children: [],
  },
  {
    path: "/vacancy/:id",
    name: "vacancyInfo",
    component: VacancyInfoView,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
