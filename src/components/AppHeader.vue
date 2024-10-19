<template>
  <v-app-bar :elevation="2" scroll-behavior="hide">
    <v-app-bar-title
      @click="
        () => {
          router.push({ name: 'Home' });
        }
      "
      >TEXT LOGO</v-app-bar-title
    >
    <template v-slot:append>
      <div class="mr-8" v-if="currentCartProducts.length">
        <v-badge color="error" :content="currentCartProducts.length">
          <v-btn append-icon="mdi-cart" :to="{ name: 'Cart' }"
            >$ {{ summaryPrice }}</v-btn
          >
        </v-badge>
      </div>
      <div class="mr-8" v-else>
        <v-btn append-icon="mdi-cart" :to="{ name: 'Cart' }">$ 0.00</v-btn>
      </div>
    </template>
  </v-app-bar>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";

const router = useRouter();

const { currentCartProducts, summaryPrice } = storeToRefs(useCartStore());
</script>

<style lang="sass" scoped></style>
