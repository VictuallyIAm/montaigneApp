<template>
  <div ref="waveform"></div>
</template>

<script setup>
import { onMounted } from "vue";
import WaveSurfer from "wavesurfer.js";

const waveform = ref(null);
let wavesurfer = null;

const props = defineProps({
  width: Number,
  height: Number,
});

onMounted(() => {
  wavesurfer = WaveSurfer.create({
    container: waveform.value,
    waveColor: "violet",
    progressColor: "purple",
    barWidth: 1,
    barGap: 1,
    barRadius: 7,
    // media: audio,
    height: props.height,
    width: props.width,
    url: "/audio/audio.mp3",
  });

  wavesurfer.on("click", () => {
    wavesurfer.play();
  });
});

onBeforeUnmount(() => {
  if (wavesurfer) {
    wavesurfer.destroy();
  }
});
</script>

<style lang="scss" scoped></style>
