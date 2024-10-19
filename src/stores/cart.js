import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const currentCartProducts = ref([]);

  const summaryPrice = computed(() => {
    return (
      specialPrice.value ||
      currentCartProducts.value.reduce((acc, item) => acc + item.price, 0)
    );
  });

  const specialPrice = computed(() => {
    return currentCartProducts.value.length === 3 ? 49.99 : null;
  });

  const addToCart = (newProduct) => {
    if (!currentCartProducts.value.some((prod) => prod.id === newProduct.id))
      currentCartProducts.value.push(newProduct);
  };

  const deleteFromCart = (productId) => {
    currentCartProducts.value = currentCartProducts.value.filter(
      (prod) => prod.id !== productId
    );
  };

  return {
    currentCartProducts,
    summaryPrice,
    addToCart,
    deleteFromCart,
  };
});
