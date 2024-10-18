<template>
  <div class="items-wrap">
    <div class="items marquee">
      <v-avatar class="item" v-for="avatar in avatars" :key="avatar">
        <v-img :src="avatar"></v-img>
      </v-avatar>
    </div>
    <div aria-hidden="true" class="items marquee">
      <v-avatar class="item" v-for="avatar in avatars" :key="avatar">
        <v-img :src="avatar" class="item-img"></v-img>
      </v-avatar>
    </div>
  </div>
</template>

<script setup>
const avatars = ref([
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/women/4.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
  "https://randomuser.me/api/portraits/men/6.jpg",
  "https://randomuser.me/api/portraits/men/7.jpg",
]);
</script>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font: 16px / 1.4 sans-serif;
}

.items-wrap {
  position: relative;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: 10px;
}
.items-wrap:before,
.items-wrap:after {
  content: "";
  height: 100%;
  top: 0;
  width: 10%;
  position: absolute;
  z-index: 1;
  pointer-events: none;
}
.items {
  flex-shrink: 0;
  display: flex;
  gap: 10px;
  counter-reset: item;
  justify-content: space-around;
  min-width: 100%;
}
.item {
  background: #ccc;
  flex: 0 0 auto;
  width: 150px;
  height: 150px;
  counter-increment: item;
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

.item:before {
  content: counter(item);
}

.marquee {
  animation: scroll 60s linear infinite;
}
.reverce {
  animation-direction: reverse;
}

.perfscan {
  margin: 20px 0;
  text-align: center;
  bottom: 0;
  background: #fff;
  padding: 5px;
}
.perfscan hr {
  border: solid #999;
  border-width: 1px 0 0 0;
  max-width: 50%;
  margin: 0 auto 20px;
}
.perfscan a {
  color: #000;
  font-weight: bold;
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
