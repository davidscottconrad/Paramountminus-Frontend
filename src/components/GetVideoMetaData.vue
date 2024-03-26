<template>
  <div>
    <div></div>
    <div v-for="video in videoMetadata" :key="video.id" class="card">
      <div class="card-body" v-if="video.s3_key">
        <h5 class="card-title">{{ video.title }}</h5>
        <p class="card-text">{{ video.description }}</p>
        <p class="card-text">Uploaded at: {{ video.uploaded_at }}</p>
        <p class="card-text">S3 Key: {{ video.s3_key }}</p>
        <VideoRow :src="video.s3_key"></VideoRow>
      </div>
    </div>
    <div>
      <GetVideo
        url="http://127.0.0.1:8000/video/?video_path=videos/Harvesting Wheat 5.mp4"
      ></GetVideo>
      <!-- <VideoPlayer :options="playerOptions"></VideoPlayer> -->
    </div>
    <div>
      <AddVideo></AddVideo>
    </div>
  </div>
</template>

<script>
// old
// old
// old
// old
import VideoRow from "./Video/VideoRow.vue";
import GetVideo from "./GetVideo.vue";
// import VideoPlayer from "./VideoPlayer.vue";
import AddVideo from "./Video/AddVideo.vue";
export default {
  name: "GetVideoMetaData",
  props: {},
  components: {
    GetVideo,
    // VideoPlayer,
    AddVideo,
    VideoRow,
  },
  data() {
    return {
      videoMetadata: null,
      playerOptions: {
        sources: [
          {
            src: "http://127.0.0.1:8000/video/?video_path=videos/not_wheat.mp4",

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
  methods: {
    fetchVideoMetadata() {
      const url = "/videos/";
      this.$axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          this.videoMetadata = response.data;
          // this.videoMetadata = response.data.map((video) => {
          //   return {
          //     ...video,
          //     s3_key: video.s3_key.replace(/ /g, "_"),
          //   };
          // });
        })
        .catch((error) => {
          console.log(error);
        });
      // function body here
    },
  },

  mounted() {
    this.fetchVideoMetadata();
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
