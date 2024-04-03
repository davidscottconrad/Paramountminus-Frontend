<template>
  <div class="main-container">
    <div class="background"></div>
    <div class="header">
      <div class="header-content">
        <h1 class="text-5xl">Test Text</h1>
        <p class="pt-3 text-xl text-left">A story About Wheat. Where does Wheat Go.</p>
        <div class="mt-6">
          <button class="text-white font-bold py-2 px-4" id="button">Button</button>
        </div>
      </div>
    </div>
    <div class="content">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi odio repellat debitis aliquid
      corporis perferendis necessitatibus assumenda et accusantium officiis eaque nisi, aperiam
      accusamus porro. Ad reprehenderit deleniti cum rerum? Lorem ipsum dolor sit, amet consectetur
      adipisicing elit. Quasi odio repellat debitis aliquid corporis perferendis necessitatibus
      assumenda et accusantium officiis eaque nisi, aperiam accusamus porro. Ad reprehenderit
      deleniti cum rerum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi odio
      repellat debitis aliquid corporis perferendis necessitatibus assumenda et accusantium officiis
      eaque nisi, aperiam accusamus porro. Ad reprehenderit deleniti cum rerum? Lorem ipsum dolor
      sit, amet consectetur adipisicing elit. Quasi odio repellat debitis aliquid corporis
      perferendis necessitatibus assumenda et accusantium officiis eaque nisi, aperiam accusamus
      porro. Ad reprehenderit deleniti cum rerum? Lorem ipsum dolor sit, amet consectetur
      adipisicing elit. Quasi odio repellat debitis aliquid corporis perferendis necessitatibus
      assumenda et accusantium officiis eaque nisi, aperiam accusamus porro. Ad reprehenderit
      deleniti cum rerum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi odio
      repellat debitis aliquid corporis perferendis necessitatibus assumenda et accusantium officiis
      eaque nisi, aperiam accusamus porro. Ad reprehenderit deleniti cum rerum? Lorem ipsum dolor
      sit, amet consectetur adipisicing elit. Quasi odio repellat debitis aliquid corporis
      perferendis necessitatibus assumenda et accusantium officiis eaque nisi, aperiam accusamus
      porro. Ad reprehenderit deleniti cum rerum? Lorem ipsum dolor sit, amet consectetur
      adipisicing elit. Quasi odio repellat debitis aliquid corporis perferendis necessitatibus
      assumenda et accusantium officiis eaque nisi, aperiam accusamus porro. Ad reprehenderit
      deleniti cum rerum?
    </div>
  </div>
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
      scrollThreshold: 500,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      const opacity = 1 - Math.min(scrollPosition / this.scrollThreshold, 1);

      // Update the opacity of the background image
      const background = document.querySelector(".background");
      background.style.opacity = opacity;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background {
  background-image: url("@/assets/grain-background.jpg");
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 1;
  transition: opacity 1s ease;
  background-size: cover; /* Ensure the background image covers the entire background */
  background-repeat: no-repeat;
  background-position: center;
}

.header {
  position: relative;
  margin-top: 20vh; /* Adjust the margin-top to start halfway down the page */
  width: 100%;
  height: 80vh;
  z-index: 2;

  padding-left: 10vw;
  padding-right: 10vh;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
  ); /* Gradient from transparent to black */
}

.content {
  position: relative;
  z-index: 2; /* Ensure the content is above the background */
  font-size: 3rem;
  background-color: black;
}
.main-container {
  position: relative;
}
.header-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40vw;
}
button {
  background-color: #e980fc;
  color: black;
}

button:hover {
  background-color: #ffd2fc;
}
</style>
<!-- DDFFF7 FFD2FC E980FC B96AC9 231B1B -->
