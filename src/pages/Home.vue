<template>
  <v-row justify="center" class="my-16">
    <header
      class="text-h2 text-center font-weight-bold cursor-pointer"
      @click="handleSpecialOfferClick"
    >
      <p class="text-red">GET SPECIAL SOMETHING</p>

      Lorem ipsum dolor for 49.99!
    </header>
  </v-row>
  <v-row justify="center" v-if="!soundPacks.length">
    <v-skeleton-loader
      class="mx-4 my-4 border"
      width="375"
      height="600"
      type="image, article, button, button"
      v-for="i in 3"
      :key="i"
    ></v-skeleton-loader>
  </v-row>
  <v-row justify="center" v-else>
    <ProductCard v-for="pack in soundPacks" :key="pack.id" :product="pack" />
  </v-row>
  <v-row class="my-16">
    <NiggersScrollCarousel />
  </v-row>
</template>

<script setup>
import { collection } from "firebase/firestore";
import { useCollection } from "vuefire";
import { db } from "@/firebase";

import { useCartStore } from "@/stores/cart";
import { useRouter } from "vue-router";

const router = useRouter();
const { addToCart } = useCartStore();

const soundPacks = useCollection(collection(db, "soundPacks"));

const handleSpecialOfferClick = () => {
  soundPacks.value.forEach((pack) => {
    addToCart(pack);
  });
  router.push({ name: "Cart" });
};
</script>
