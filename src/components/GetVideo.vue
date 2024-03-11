<template>
  <div></div>
</template>

<script>
import videojs from "video.js";
import "video.js/dist/video-js.css";
import VideoPlayer from "./VideoPlayer.vue";
export default {
  name: "GetVideo",
  component: { VideoPlayer },
  props: {
    url: String,
  },
  data() {
    return {
      videoMetadata: null,
      player: null,
      videoOptions: {
        autoplay: true,
        controls: true,
        sources: [
          {
            type: "video/mp4",
          },
        ],
      },
      playerOptions: {
        sources: [
          {
            src: "http://127.0.0.1:8000/video/?video_path=videos/Harvesting_Wheat.mp4",

            type: "video/mp4",
          },
        ],
        width: "640",
        height: "360",
        preload: "auto",
        // Add more Video.js options as needed
      },
    };
  },

  methods: {
    initializePlayer() {
      this.player = videojs(this.$refs.videoPlayer, {
        // Video.js options
      });
    },
  },
  mounted() {},
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>

<style scoped>
/* Add any additional styles for the video player */
</style>
