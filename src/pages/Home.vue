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
  <v-row justify="center">
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </v-row>
  <v-row class="my-16">
    <NiggersScrollCarousel />
  </v-row>
  <!-- <WaveForm /> -->
</template>

<script setup>
import WaveForm from "@/components/WaveForm.vue";

const handleSpecialOfferClick = () => {
  console.log("specialoffer clicked!");
};
</script>
