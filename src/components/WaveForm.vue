<template>
  <vue-wave-surfer :src="sound" :options="options"></vue-wave-surfer>
</template>

<script setup>
import { onMounted } from "vue";
import WaveSurfer from "wavesurfer.js";
import sound from "../assets/audio.mp3";

// const waveform = ref(null);
// let wavesurfer = null;

// onMounted(() => {
//   wavesurfer = WaveSurfer.create({
//     container: waveform.value,
//     waveColor: "violet",
//     progressColor: "purple",
//     barWidth: 2,
//     barGap: 1,
//     barRadius: 2,
//     url: "../assets/audio.mp3",
//   });

//   // wavesurfer.load("../assets/audio.mp3");

//   wavesurfer.on("ready", () => {
//     console.log("WaveSurfer ready");
//   });
//   wavesurfer.on("load", (url) => {
//     console.log(url);
//   });

//   wavesurfer.on("redrawcomplete", () => {
//     console.log("Redraw began");
//   });

//   wavesurfer.on("click", () => {
//     wavesurfer.play();
//   });
// });

// onBeforeUnmount(() => {
//   if (wavesurfer) {
//     wavesurfer.destroy();
//   }
// });
</script>

<style lang="scss" scoped></style>
