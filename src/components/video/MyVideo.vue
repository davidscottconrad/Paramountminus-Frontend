<template>
  <div v-if="loading" class="video-container">
    <div></div>
    <div class="video-container-2">
      <VideoPlayerComponent :options="videoOptions" />
    </div>
  </div>
</template>

<script>
import VideoPlayerComponent from "./VideoPlayer.vue";

export default {
  name: "MyVideo",
  components: {
    VideoPlayerComponent,
  },
  props: {
    id: {
      require: true,
    },
  },
  data() {
    return {
      loading: false,
      videoOptions: {
        autoplay: true,
        controls: true,
        sources: [
          {
            src: ``,
            type: "video/mp4",
          },
        ],
        muted: true,
      },
    };
  },
  mounted() {
    console.log(this.$apiURL);
    this.getVideo();
  },
  methods: {
    getVideo() {
      const url = "/movie-upload/?id=" + this.id;
      this.$axios
        .get(url)
        .then((response) => {
          console.log("video", response.data);
          this.videoOptions.sources[0].src = response.data.signed_url;
          console.log(
            "video inside videoOptions",
            this.videoOptions.sources[0].src
          );
        })
        .catch((error) => {
          console.error("Error loading video" + error);
          // alert("Error ");
          // Handle error
        })
        .then(() => {
          this.loading = true;
        });
    },
  },
};
</script>

<style scoped>
.video-container-2 {
  height: 300px;
  width: 400px;
}
.video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.video-container >>> .video-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
