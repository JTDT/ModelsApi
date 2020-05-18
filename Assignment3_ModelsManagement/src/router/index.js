import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Jobs from "../components/Jobs.vue";
import AddJob from "../components/AddJob.vue";
import AddModelToJob from "../components/AddModelToJob.vue";
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

    {
        path: "/jobs",
        name: "Jobs",
        component: Jobs
        },
        {
        path: "/addjob",
        name: "AddJob",
        component: AddJob
        },
        {
            path: "/addmodeltojob",
            name: "AddModelToJob",
            component: AddModelToJob
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