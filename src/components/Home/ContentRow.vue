<template>
  <div class="container">
    <a
      class="carousel-prev focusable"
      @click="scrollLeft"
      v-if="showLeftArrow"
      role="button"
      aria-label="Previous Slides"
      tabindex="0"
    >
      <span class="material-symbols-outlined"> arrow_back_ios_new </span>
    </a>
    <div class="scrollable-row" ref="scrollableRow" @scroll="handleScroll">
      <div class="item m-1" v-for="(item, idx) in content" :key="idx">
        <ResponsiveImage
          :videoID="item.id"
          :src="item.photo_url"
          :alt="item.name"
          @click="selectFeature(item)"
        />
      </div>
    </div>
    <a
      class="carousel-next focusable"
      @click="scrollRight"
      v-if="showRightArrow"
      role="button"
      aria-label="Next Slides"
      tabindex="0"
    >
      <span class="material-symbols-outlined"> arrow_forward_ios </span>
    </a>
  </div>
</template>

<script>
import ResponsiveImage from "./ResponsiveImage.vue";
export default {
  name: "ContentRow",
  components: {
    ResponsiveImage,
  },
  props: {
    content: Array,
  },
  data() {
    return {
      showLeftArrow: false,
      showRightArrow: true,
    };
  },
  mounted() {
    this.checkArrows();
  },
  methods: {
    selectFeature(item) {
      this.$emit("feature-selected", item);
    },
    scrollLeft() {
      const scrollableRow = this.$refs.scrollableRow;
      scrollableRow.scrollLeft -= window.innerWidth * 0.7; // Scroll 70vw to the left
    },
    scrollRight() {
      const scrollableRow = this.$refs.scrollableRow;
      scrollableRow.scrollLeft += window.innerWidth * 0.7; // Scroll 70vw to the right
    },
    handleScroll() {
      this.checkArrows();
    },
    checkArrows() {
      const scrollableRow = this.$refs.scrollableRow;
      this.showLeftArrow = scrollableRow.scrollLeft > 0;
      this.showRightArrow =
        scrollableRow.scrollLeft <
        scrollableRow.scrollWidth - scrollableRow.clientWidth;
    },
  },
  beforeUnmount() {},
};
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 500, "GRAD" 0, "opsz" 40;
}
.container {
  position: relative;
  max-width: 100%;
  overflow: hidden;
  background: transparent;
  margin-bottom: 4vh;
}

.scrollable-row {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 20px;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Hide the scrollbar */
  -ms-overflow-style: none; /* Hide the scrollbar in IE and Edge */
}

.scrollable-row::-webkit-scrollbar {
  display: none; /* Hide the scrollbar in WebKit browsers */
}

.item {
  flex: 0 0 auto;
  margin-right: 10px;
}

.item img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}

.carousel-prev,
.carousel-next {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 60px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease;
}

.carousel-prev:hover,
.carousel-next:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.carousel-prev {
  left: 0;
}

.carousel-next {
  right: 0;
}

.arrow {
  font-size: 24px;
}
</style>
