<template>
  <div class="m-2" v-if="loading">
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
        width: "480",
        height: "270",
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
            "video inside videopotions",
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
* {
}
</style>
