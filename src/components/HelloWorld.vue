<template>
  <div class="background"></div>
</template>

<script>
// import MyVideo from "./video/MyVideo.vue";
// import AddVideo from "./video/AddVideo.vue";

export default {
  name: "HelloWorld",
  components: {
    // MyVideo,
    // AddVideo,
  },
  data() {
    return {
      items: null,
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
.background {
  background-image: url("@/assets/grain-background.jpg");
  /* background-color: aqua; */
  height: 100vh;
  margin: 0;
  padding: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
</style>
