<template>
  <div><VideoPlayer :options="playerOptions"></VideoPlayer></div>
</template>

<script>
import VideoPlayer from "./../VideoPlayer.vue";

export default {
  name: "VideoRow",
  props: { src: String },
  components: {
    VideoPlayer,
  },
  data() {
    return {
      videoMetadata: null,
      playerOptions: {
        sources: [
          {
            src: `${this.$apiURL}/video/?video_path=videos/${this.src}`,

            type: "video/mp4",
          },
        ],
        width: "640",
        height: "360",
        autoplay: true,
        controls: true,
        muted: true,
        // Add more Video.js options as needed
      },
    };
  },
  methods: {},

  mounted() {
    console.log("the source is: ", this.src);
    console.log(this.$apiURL);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
