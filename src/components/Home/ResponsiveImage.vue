<template>
  <div class="responsive-image">
    <img
      :style="{
        width: imageWidth + 'px',
        height: imageHeight + 'px',
        maxWidth: '207.5px',
        maxHeight: '311.25px',
      }"
      :src="src"
      :alt="alt"
    />
  </div>
</template>

<script>
export default {
  name: "ResponsiveImage",
  props: {
    videoID: {
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    imageWidth() {
      console.log(this.windowWidth / 5.72);
      // Calculate the width based on the window width (e.g., 50% of the window width)
      return this.windowWidth / 5.72;
    },
    imageHeight() {
      // Calculate the height based on the width and the 9:16 aspect ratio
      return this.windowWidth / 3.810811885914316;
    },
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>

<style scoped>
.responsive-image {
  cursor: pointer;
}
</style>
