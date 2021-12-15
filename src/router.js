import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
// lazy-loaded
const Profile = () => import("./components/Profile.vue")
const Team = () => import("./components/Team/Team.vue")
const CreateTeam = () => import("./components/Team/CreateTeam.vue")
const ShowTeam = () => import("./components/Team/ShowTeam.vue")
const UpdateTeam = () => import("./components/Team/UpdateTeam.vue")

const Employee = () => import("./components/Employee/Employee.vue")
const CreateEmployee = () => import("./components/Employee/CreateEmployee.vue")
const ShowEmployee = () => import("./components/Employee/ShowEmployee.vue")
const UpdateEmployee = () => import("./components/Employee/UpdateEmployee.vue")  

const task = () => import("./components/task/task.vue")  
const createTask = () => import("./components/task/createTask.vue")  
const showTask = () => import("./components/task/showTask.vue")  
const UpdateTask = () => import("./components/task/UpdateTask.vue")  
const showLogs = () => import("./components/task/showLogs.vue")  



const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/Team",
    name: "Team",
    // lazy-loaded
    component: Team,
  },
  {
    path: "/CreateTeam",
    name: "CreateTeam",
    // lazy-loaded
    component: CreateTeam,
  },
  {
    path: "/ShowTeam",
    name: "ShowTeam",
    // lazy-loaded
    component: ShowTeam,
  },
  {
    path: "/UpdateTeam",
    name: "UpdateTeam",
    // lazy-loaded
    component: UpdateTeam,
  },
  {
    path: "/Employee",
    name: "Employee",
    // lazy-loaded
    component: Employee,
  },
  {
    path: "/CreateEmployee",
    name: "CreateEmployee",
    // lazy-loaded
    component: CreateEmployee,
  },
  {
    path: "/ShowEmployee",
    name: "ShowEmployee",
    // lazy-loaded
    component: ShowEmployee,
  },
  {
    path: "/UpdateEmployee",
    name: "UpdateEmployee",
    // lazy-loaded
    component: UpdateEmployee,
  },
  {
    path: "/task",
    name: "task",
    // lazy-loaded
    component: task,
  },
  {
    path: "/createTask",
    name: "createTask",
    // lazy-loaded
    component: createTask,
  },
  {
    path: "/showTask",
    name: "showTask",
    // lazy-loaded
    component: showTask,
  },
  {
    path: "/UpdateTask",
    name: "UpdateTask",
    // lazy-loaded
    component: UpdateTask,
  },
  {
    path: "/showLogs",
    name: "showLogs",
    // lazy-loaded
    component: showLogs,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;