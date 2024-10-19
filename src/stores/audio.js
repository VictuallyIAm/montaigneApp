import { defineStore } from "pinia";

export const useAudioStore = defineStore("audio", () => {
  const activeSongId = ref(null);

  const currentAudioRef = ref(null);

  const switchActiveSong = (audioRef, id) => {
    if (audioRef === currentAudioRef.value) {
      currentAudioRef.value.pause();
      currentAudioRef.value = null;
      activeSongId.value = null;
    } else {
      currentAudioRef.value?.pause();
      currentAudioRef.value = audioRef;
      activeSongId.value = id;
      currentAudioRef.value.play();
    }
  };

  return { activeSongId, switchActiveSong };
});
