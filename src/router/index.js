import { createRouter, createWebHistory } from "vue-router";
// import Home from '../views/Home.vue'
import register from "../components/RegisterForm.vue";
import home from "../components/Home.vue"

const routes = [
    {
      path: '/',
      name: 'home',
      component: home
    },
  {
    path: "/register/:id",
    name: "Register",
    component: register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
