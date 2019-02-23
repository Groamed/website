import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/anime",
      name: "anime list",
      component: () =>
        import("./views/AnimeList.vue")
    },
    {
      path: "/anime/:id",
      name: "anime",
      component: () =>
        import("./views/Anime.vue")
    },
    {
      path: "/doramas",
      name: "doramas",
      component: () =>
        import("./views/Doramas.vue")
    },
    {
      path: "/news",
      name: "news",
      component: () =>
        import("./views/News.vue")
    }
  ]
});
