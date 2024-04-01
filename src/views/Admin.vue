<template>
  <button @click="getTest">tes</button>
  <AddVideo></AddVideo>
  <MyVideo />
</template>
<script>
// @ is an alias to /src
import AddVideo from "../components/video/AddVideo.vue";
import MyVideo from "../components/video/MyVideo.vue";
export default {
  name: "HomeView",
  components: {
    AddVideo,
    MyVideo,
  },
};
</script>
