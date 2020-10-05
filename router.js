import Vue from "vue";
import Router from "vue-router";
import Main from "./pages/index.vue";
import Secondary from "./pages/test/test.vue";

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        component: Main
      },
      {
        path: "/test",
        component: Secondary
      }
    ]
  });
}
