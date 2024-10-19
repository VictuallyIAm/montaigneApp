import { createRouter, createWebHistory } from "vue-router/auto";
import Home from "@/pages/Home.vue";
import Product from "@/pages/Product.vue";
import Cart from "@/pages/Cart.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home, name: "Home" },
    { path: "/product/:id", component: Product, name: "Product" },
    { path: "/cart", component: Cart, name: "Cart" },
  ],
});

router.onError((err, to) => {
  if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
    if (!localStorage.getItem("vuetify:dynamic-reload")) {
      console.log("Reloading page to fix dynamic import error");
      localStorage.setItem("vuetify:dynamic-reload", "true");
      location.assign(to.fullPath);
    } else {
      console.error("Dynamic import error, reloading page did not fix it", err);
    }
  } else {
    console.error(err);
  }
});

router.beforeEach(async (to) => {
  // console.log(to);
  // if (to.fullPath === "/") {
  //   return "/montaigneApp/home";
  // }
});

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
