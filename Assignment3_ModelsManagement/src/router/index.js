import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
//import Login from "../components/Login.vue";
//import Jobs from "../components/Jobs.vue";
//import Models from "../components/Models.vue";
//import Managers from "../components/Managers.vue";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
    {
        path: "/",
        name: "Home",
        component: Home
    }

    //{
    //    path: "/login",
    //    name: "Login",
    //    component: Login
    //},
    //{
    //    path: "/jobs",
    //    name: "Jobs",
    //    component: Jobs
    //},
    //{
    //    path: "/models",
    //    name: "Models",
    //    component: Models
    //},
    //{
    //    path: "/managers",
    //    name: "Managers",
    //    component: Managers
    //}

    ]
})

//const router = new VueRouter({
//    mode: "history",
//    base: process.env.BASE_URL,
//    routes
//});

//export default router;