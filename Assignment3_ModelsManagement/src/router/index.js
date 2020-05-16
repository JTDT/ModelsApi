import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
//import Login from "../components/Login.vue";
import Jobs from "../components/Jobs.vue";
import Model from "../components/Model.vue";
import Manager from "../components/Manager.vue";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
    {
        path: "/",
        name: "Home",
        component: Home
    },

    //{
    //    path: "/login",
    //    name: "Login",
    //    component: Login
    //},
    {
        path: "/jobs",
        name: "Jobs",
        component: Jobs
    },
    {
        path: "/model",
        name: "Model",
        component: Model
    },
    {
        path: "/manager",
        name: "Manager",
        component: Manager
    }

    ]
})

//const router = new VueRouter({
//    mode: "history",
//    base: process.env.BASE_URL,
//    routes
//});

//export default router;