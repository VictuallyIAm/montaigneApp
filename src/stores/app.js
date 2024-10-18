import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const isCartOpen = ref(false);

  const openCart = () => {
    isCartOpen.value = !isCartOpen.value;
  };

  return {
    isCartOpen,
    openCart,
  };
});
