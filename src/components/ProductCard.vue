<template>
  <v-card
    color="#952175"
    class="mx-4 my-4 v-card-scaled"
    @click.stop="() => router.push('/product')"
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="text-h5">
          Electra 3 Robb Bank Soundkit
        </v-card-title>
        <v-avatar class="ma-3" rounded="0" size="350">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
          ></v-img>
        </v-avatar>

        <v-card-subtitle>35 x keys</v-card-subtitle>
        <v-card-subtitle>42 x arps</v-card-subtitle>
        <v-card-subtitle>19 x bass</v-card-subtitle>
        <v-card-subtitle>Read more...</v-card-subtitle>

        <v-card-actions class="d-flex justify-center">
          <div style="width: 50%">
            <v-btn
              width="100%"
              prepend-icon="mdi-play"
              variant="tonal"
              @click.stop="() => console.log('clcik')"
              >Play</v-btn
            >
          </div>
          <div style="width: 50%">
            <v-btn
              width="100%"
              variant="tonal"
              @click.stop="() => console.log('clcik')"
              >Buy</v-btn
            >
          </div>
        </v-card-actions>
        <v-card-actions class="d-flex justify-center">
          <v-btn
            class=""
            variant="tonal"
            block
            @click.stop="() => console.log('clcik')"
            >Free demo</v-btn
          >
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style lang="scss" scoped>
.v-card-scaled:hover {
  transform: scale(1.02);
}
</style>
