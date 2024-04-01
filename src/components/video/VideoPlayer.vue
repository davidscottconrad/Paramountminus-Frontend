<template>
  <div>
    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>

<script>
import videojs from "video.js";
import "video.js/dist/video-js.css";

export default {
  name: "VideoPlayer",
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      player: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.player = videojs(this.$refs.videoPlayer, this.options, () => {
        console.log("Video player is ready");
      });
    });
  },
  beforeUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>

<style scoped>
/* Add any custom styles for the video player here */
</style>
