import { createWebHistory, createRouter } from "vue-router";
import NotFound from "../components/NotFound";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import HomePage from "../components/pages/HomePage";
import Profile from "../components/pages/Profile";

import store from "../store/store";
// const checkAuth = (to) => {
//   if (
//     to.name !== "Login" &&
//     to.name !== "Register" &&
//     !store.state.isAuthenticated
//   ) {
//     return "/";
//   }
// };

const routes = [
  {
    name: "Login",
    path: "/",
    component: Login,
  },

  {
    name: "Register",
    path: "/register",
    component: Register,
  },
  {
    name: "Homepage",
    path: "/homepage",
    component: HomePage,
    meta: {
      requireAuth: true,
    },
    // beforeEnter: [checkAuth],
  },
  {
    name: "Profile",
    path: "/profile/:id",
    component: Profile,
    meta: {
      requireAuth: true,
    },
    children: [
      {
        name: "Posts",
        path: "posts",
      },
      {
        name: "Followers",
        path: "followers",
      },
      {
        name: "Followings",
        path: "followings",
      },
    ],
  },
  {
    path: "/:pathMatch(.*)",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach(async (to, from) => {
  const requiresAuth = to.matched.some((record) => record.meta.requireAuth);
  const canAccess = await store.dispatch("canAccess");

  if (requiresAuth && !canAccess) {
    return `${from.path}`;
  }
  if ((to.name === "Login" || to.name === "Register") && canAccess) {
    return `/homepage`;
  }
});

export default router;
