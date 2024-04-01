<template>
  <div>
    <button @click="getTest">tes</button>
    <AddVideo></AddVideo>
    <MyVideo />
  </div>
</template>

<script>
import MyVideo from "./video/MyVideo.vue";
import AddVideo from "./video/AddVideo.vue";

export default {
  name: "HelloWorld",
  components: {
    MyVideo,
    AddVideo,
  },
  data() {
    return {
      items: null,
      playerOptions: {
        sources: [
          {
            src: `http://localhost:8000/video/?id=1`,

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
  mounted() {
    this.getTest();
  },
  methods: {
    getTest() {
      console.log();
      const url = "/items";
      this.$axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          this.items = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.items = error;
        });
      // function body here
    },
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
