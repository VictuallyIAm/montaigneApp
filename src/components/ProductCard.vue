<template>
  <v-card
    color="#952175"
    class="mx-4 my-4 v-card-scaled"
    @click="
      () => {
        router.push({ name: 'Product', params: { id: props.product.id } });
      }
    "
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="text-h5">
          {{ props.product.name }}
        </v-card-title>
        <v-avatar class="ma-3" rounded="0" size="350">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
          ></v-img>
        </v-avatar>

        <v-card-subtitle v-for="i in 3" :key="i">{{
          props.product.containDecription[i - 1]
        }}</v-card-subtitle>
        <v-card-subtitle>Read more...</v-card-subtitle>

        <v-card-actions class="d-flex justify-center">
          <div style="width: 50%">
            <v-btn
              width="100%"
              :prepend-icon="
                activeSongId === props.product.id ? 'mdi-pause' : 'mdi-play'
              "
              variant="tonal"
              @click.stop="switchActiveSong(audio, props.product.id)"
            >
              {{ activeSongId === props.product.id ? "Pause" : "Play" }}
            </v-btn>
          </div>
          <audio
            ref="audio"
            :src="props.product.commonDemoUrl"
            @ended="switchActiveSong(audio, props.product.id)"
          ></audio>
          <div style="width: 50%">
            <v-btn
              width="100%"
              variant="tonal"
              @click.stop="() => addToCart(props.product)"
              >Buy</v-btn
            >
          </div>
        </v-card-actions>
        <v-card-actions class="d-flex justify-center">
          <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn
                class=""
                variant="tonal"
                block
                v-bind="activatorProps"
                @click.stop
                >Free demo</v-btn
              >
            </template>

            <template v-slot:default="{ isActive }">
              <v-card class="px-4 py-4">
                <v-form
                  @submit.prevent="
                    () => {
                      if (isValidEmail(userEmail) && userEmail) {
                        isActive.value = false;
                      }
                    }
                  "
                >
                  <v-card-text class="text-center text-h5"
                    >Enter your email to download the some Pack.</v-card-text
                  >
                  <v-text-field
                    type="text"
                    label="Email adress*"
                    class="mx-8"
                    variant="outlined"
                    :rules="[rules.required, rules.email]"
                    validate-on="submit"
                    v-model="userEmail"
                  ></v-text-field>
                  <v-card-actions class="mx-4 mb-8 mt-4 d-flex justify-center">
                    <v-btn
                      variant="tonal"
                      width="80%"
                      height="64px"
                      type="submit"
                      >Get free demo</v-btn
                    >
                  </v-card-actions>
                  <v-card-text class="text-center text-subtitle-1"
                    >*By completing this form I agree to receive communications
                    from producergrind.com</v-card-text
                  >
                </v-form>
              </v-card>
            </template>
          </v-dialog>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useAudioStore } from "@/stores/audio";
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";

const { addToCart } = useCartStore();

const props = defineProps({
  product: Object,
});

const userEmail = ref("");

const rules = ref({
  required: (value) => !!value || "Email is required",
  email: (value) => isValidEmail(value) || "Email is not valid",
});

const router = useRouter();
const audio = ref(null);

const { activeSongId } = storeToRefs(useAudioStore());
const { switchActiveSong } = useAudioStore();

const isValidEmail = (value) => {
  return !!String(value)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const downloadFile = () => {
  const fileUrl = props.product.commonDemoUrl;

  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "Free demo";
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
};
</script>

<style lang="scss" scoped>
.v-card-scaled:hover {
  transform: scale(1.02);
}
</style>
