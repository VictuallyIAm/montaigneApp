<template>
  <v-app-bar :elevation="2" scroll-behavior="hide">
    <v-app-bar-title>TEXT LOGO</v-app-bar-title>
    <template v-slot:append>
      <span>$ 0.00</span>
      <v-btn icon="mdi-cart" @click="openCart"></v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
import { useAppStore } from "@/stores/app";

const { openCart } = useAppStore();
</script>

<style lang="sass" scoped></style>
