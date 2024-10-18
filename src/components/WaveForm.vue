<template>
  <div ref="waveform"></div>
</template>

<script setup>
import { onMounted } from "vue";
import WaveSurfer from "wavesurfer.js";
import sound from "../assets/audio.mp3";

const waveform = ref(null);
let wavesurfer = null;

onMounted(() => {
  const audio = new Audio(sound);

  wavesurfer = WaveSurfer.create({
    container: waveform.value,
    waveColor: "violet",
    progressColor: "purple",
    barWidth: 2,
    barGap: 1,
    barRadius: 7,
    media: audio,
    height: 33,
    width: 300,
    // url: "https://wavesurfer.xyz/examples/audio/demo.wav",
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
