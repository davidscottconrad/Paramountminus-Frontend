<template>
  <div class="main-container">
    <NavBar />
    <div v-if="loading" class="loading-container">
      <div class="loader"></div>
    </div>
    <div v-if="!loading">
      <div
        class="background"
        :style="{ backgroundImage: `url(${FeatureContent.background_url})` }"
      ></div>
      <div class="spacing"></div>
      <div class="header">
        <div class="header-content">
          <div id="feature-wrapper">
            <div
              id="metadata-wrapper"
              class="grid grid-rows-2 self-end p-2 ml-5"
            >
              <div class="h-min">
                <h1 class="text-5xl text-left">{{ FeatureContent.name }}</h1>
              </div>
              <div class="h-min" id="description-wrapper">
                <p class="pt-3 text-xl text-left" style="color: #00d86d">
                  Paramount Original
                </p>
                <p class="pt-3 text-xl text-left">
                  {{ FeatureContent.description }}
                </p>
              </div>
              <div class="mt-5 h-min justify-self-start">
                <button
                  class="text-white font-bold py-2 px-4"
                  id="button"
                  @click="
                    $router.push({ path: `/watch-now/${FeatureContent.id}` })
                  "
                >
                  Watch Now
                </button>
              </div>
            </div>
          </div>
          <ConentRow
            :content="content"
            @feature-selected="handleFeatureSelected"
          />

          <ConentRow
            :content="contentTwo"
            @feature-selected="handleFeatureSelected"
          />
          <ConentRow
            :content="contentThree"
            @feature-selected="handleFeatureSelected"
          />
        </div>
      </div>
      <div id="background-black"></div>
    </div>
  </div>
</template>

<script>
import ConentRow from "./Home/ContentRow.vue";
import NavBar from "./Home/NavBar.vue";
export default {
  name: "HomePage",
  components: {
    ConentRow,
    NavBar,
  },
  data() {
    return {
      items: null,
      scrollThreshold: 500,
      FeatureContent: Object,
      content: Array,
      loading: true,
      contentTwo: Array,
      contentThree: Array,
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
    handleFeatureSelected(item) {
      this.FeatureContent = item;
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    shuffleContent(array) {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
          shuffledArray[j],
          shuffledArray[i],
        ];
      }
      return shuffledArray;
    },
    GetVideoMetaData() {
      const url = "/video-metadata/?photo=true";
      this.$axios
        .get(url)
        .then((response) => {
          this.FeatureContent = response.data[4];
          this.content = response.data;
          this.contentTwo = this.shuffleContent(this.content);
          this.contentThree = this.shuffleContent(this.content);
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => (this.loading = false));
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
  height: 60vh;
  z-index: 2;

  padding-left: 3vw;
  padding-right: 3vw;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.9) 70%,
    rgba(0, 0, 0, 1)
  ); /* Gradient from transparent to black */
}

#feature-image {
  aspect-ratio: 9/16;
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
}
/* Define the initial background gradient */
button {
  letter-spacing: 0.4px;
  font-weight: 400;
  background: linear-gradient(45deg, #0064ff, #0037c5);
}

.spacing {
  height: 30vh;
}

#feature-wrapper {
  display: flex;
  margin-bottom: 10vh;
  flex-direction: row;
  max-width: 600px;
}

#background-black {
  position: absolute;
  top: 100vh;
  left: 0;
  width: 100%;
  height: 100vh; /* Adjust height as needed */
  background-color: black; /* Background color */
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
/* HTML: <div class="loader"></div> */
.loader {
  width: 100px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #0037c5;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
}
@keyframes l3 {
  to {
    transform: rotate(1turn);
  }
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30vh;
}
</style>
<!-- DDFFF7 FFD2FC E980FC B96AC9 231B1B -->
