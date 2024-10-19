<template>
  <audio ref="audio" @ended=""></audio>
</template>

<script setup>
import { useAudioStore } from "@/stores/audio";

const { currentTrack } = storeToRefs(useAudioStore());
const { setActiveSong } = useAudioStore();

const audio = ref(null);

watch(currentTrack, (newVal) => {
  audio.pause();
  if (newVal) {
    audio.src = newVal.commonDemoUrl;
    audio.play();
  }
});
</script>

<style lang="scss" scoped></style>
