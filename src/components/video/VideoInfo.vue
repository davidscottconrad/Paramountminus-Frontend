<template>
  <div
    v-if="!loading"
    id="container"
    class="d-flex justify-center align-center"
  >
    <div
      v-for="(item, idx) in videoData"
      :key="idx"
      class="container p-3 m-3 rounded bg-gray-900 shadow-lg"
    >
      <h1 class="underline">VIDEO INFO</h1>
      <!-- <img :src="pngDataURL" alt="Converted PNG" /> -->
      <div><h1>name</h1></div>
      <div class="item">{{ item.name }}</div>
      <div><h1>description</h1></div>
      <div class="item">{{ item.description }}</div>
      <div><h1>id</h1></div>
      <div class="item">{{ item.id }}</div>
      <OneThumbnail :id="item.id"></OneThumbnail>
      <MyVideo :id="item.id"></MyVideo>
      <!-- <div><img :src="item.photo_url" alt="" style="max-height: 100px" /></div> -->
      <!-- <button @click="convertToPNG">Convert to PNG</button> -->
    </div>
  </div>
</template>

<script>
import MyVideo from "./MyVideo.vue";
import OneThumbnail from "./OneThumbnail.vue";
export default {
  name: "VideoInfo",
  components: {
    OneThumbnail,
    MyVideo,
  },
  props: {},
  data() {
    return {
      base64Image: null,
      imageBytes: null,
      loading: true,
      videoData: null,
    };
  },
  methods: {
    fetchVideoMetadata() {
      const url = "/video-metadata/";
      this.$axios
        .get(url)
        .then((response) => {
          this.videoData = response.data;
          console.log(this.videoData);
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
      // function body here
    },
    // convertToPNG() {
    //   // Create an image object
    //   const image = new Image();
    //   image.src = this.base64Image;
    //   console.log(image.src);
    //   // Wait for the image to load
    //   image.onload = () => {
    //     // Create a canvas element
    //     const canvas = document.createElement("canvas");
    //     canvas.width = image.width;
    //     canvas.height = image.height;

    //     // Draw the image onto the canvas
    //     const context = canvas.getContext("2d");
    //     context.drawImage(image, 0, 0);

    //     // Convert the canvas to a data URL representing the PNG image
    //     this.pngDataURL = canvas.toDataURL("image/png");
    //   };
    // },
  },
  mounted() {
    this.fetchVideoMetadata();
  },
  beforeUnmount() {},
};
</script>

<style scoped>
div {
  margin: 0.2rem;
}
#photo {
  height: 300px;
}
h1 {
  font-size: larger;
}

#container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: left;
}

.item {
  margin-bottom: 1rem;
}
/* Add any custom styles for the video player here */
</style>
