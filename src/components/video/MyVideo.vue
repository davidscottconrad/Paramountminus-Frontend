<template>
  <div class="m-2">
    <VideoPlayerComponent :options="videoOptions" />
  </div>
</template>

<script>
import VideoPlayerComponent from "./VideoPlayer.vue";

export default {
  name: "MyVideo",
  components: {
    VideoPlayerComponent,
  },
  data() {
    return {
      videoOptions: {
        autoplay: true,
        controls: true,
        sources: [
          {
            src: `${this.$apiURL}video/?id=1`,
            type: "video/mp4",
          },
        ],
        width: "480",
        height: "270",
        muted: true,
      },
    };
  },
  mounted() {
    console.log(this.$apiURL);
  },
};
</script>

<style scoped>
* {
  margin-top: 20vh;
}
</style>
