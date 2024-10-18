<template>
  <v-navigation-drawer
    v-model="isCartOpen"
    temporary
    :width="1200"
    location="end"
    ><v-list>
      <v-list-item>
        <v-list-item-title>Panel Content</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";
import { useAppStore } from "@/stores/app";
import { storeToRefs } from "pinia";

const { isCartOpen } = storeToRefs(useAppStore());
</script>

<style lang="scss">
.v-navigation-drawer {
  transition: transform 0.3s ease-in-out;
}
</style>
