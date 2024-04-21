<template>
  <div class="main-container">
    <div class="background"></div>
    <div class="spacing"></div>
    <div class="header">
      <div class="header-content">
        <div id="feature-wrapper">
          <div>
            <img
              id="feature-image"
              :src="FeatureContent.photo_url"
              :alt="FeatureContent.name"
            />
          </div>

          <div id="metadata-wrapper" class="grid grid-rows-2 self-end p-2 ml-5">
            <div class="h-min">
              <h1 class="text-5xl">{{ FeatureContent.name }}</h1>
            </div>
            <div class="h-min" id="description-wrapper">
              <p class="pt-3 text-xl text-left">
                {{ FeatureContent.description }}
              </p>
            </div>
            <div class="mt-5 h-min">
              <button class="text-white font-bold py-2 px-4" id="button">
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi odio
    </div>
  </div>
</template>

<script>
// import GetVideoMetaData from "./GetVideoMetaData.vue";

// import MyVideo from "./video/MyVideo.vue";
// import AddVideo from "./video/AddVideo.vue";
// import FeatureContent from "./Home/FeatureContent.vue";
export default {
  name: "HomePage",
  components: {
    // FeatureContent,
    // MyVideo,
    // AddVideo,
  },
  data() {
    return {
      items: null,
      scrollThreshold: 500,
      FeatureContent: Object,
    };
  },
  mounted() {
    this.GetVideoMetaData();
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    GetVideoMetaData() {
      const url = "/video-metadata/?photo=true";
      this.$axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          this.FeatureContent = response.data[0];
        })
        .catch((error) => {
          console.log(error);
        });
      // function body here
    },
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

  padding-left: 2vw;
  padding-right: 10vh;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
  ); /* Gradient from transparent to black */
}

#feature-image {
  height: 300px;
  width: 300px;
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
/* Define the initial background gradient */
button {
  letter-spacing: 0.4px;
  font-weight: 400;
  background: linear-gradient(45deg, #0064ff, #0037c5);
}

.spacing {
  height: 25vh;
}

#feature-wrapper {
  display: flex;
  flex-direction: row;
}
/*
#metadata-wrapper {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  gap: 10px;
  padding: 10px;
  padding-left: 30px;
}

#description-wrapper {
  display: flex;
  align-items: center;
  justify-content: left;
} */
</style>
<!-- DDFFF7 FFD2FC E980FC B96AC9 231B1B -->
