import {RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
const URL = "/proxy/3000/absproxy/3000"
const routes : Readonly<RouteRecordRaw[]> = [
    {
        path:URL+"/",
        name:"main",
        component:()=>import("../App.vue")
    },
    {
        path:URL+"/patient",
        name:"patient",
        component:()=>import("@feature/patient/page/PatientPage.vue")
    },
    {
        path: URL+"/test",
        name: "Test",
        component: () => import("@feature/test/page/Test.vue")
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export {router}