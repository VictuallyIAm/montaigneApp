<template>
  <div class="carousel-wrap">
    <div class="carousel marquee">
      <v-avatar class="carousel-item" v-for="avatar in avatars" :key="avatar">
        <v-img :src="'/images/' + avatar"></v-img>
      </v-avatar>
    </div>
    <div aria-hidden="true" class="carousel marquee">
      <v-avatar class="carousel-item" v-for="avatar in avatars" :key="avatar">
        <v-img :src="'/images/' + avatar"></v-img>
      </v-avatar>
    </div>
  </div>
</template>

<script setup>
const avatars = [
  "img1.jpg",
  "img2.jpg",
  "img1.jpg",
  "img2.jpg",
  "img1.jpg",
  "img2.jpg",
  "img1.jpg",
  "img2.jpg",
  "img1.jpg",
];
</script>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font: 16px / 1.4 sans-serif;
}

.carousel-wrap {
  position: relative;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: 10px;
}
.carousel-wrap:before,
.carousel-wrap:after {
  content: "";
  height: 100%;
  top: 0;
  width: 10%;
  position: absolute;
  z-index: 1;
  pointer-events: none;
}
.carousel {
  flex-shrink: 0;
  display: flex;
  gap: 10px;
  justify-content: space-around;
  min-width: 100%;
}
.carousel-item {
  flex: 0 0 auto;
  width: 150px !important;
  height: 150px !important;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  margin: 20px 0;
  transition: all 0.1s ease-in-out;
}

.marquee {
  animation: scroll 60s linear infinite;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - 20px));
  }
}
</style>
