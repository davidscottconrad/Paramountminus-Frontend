<template>
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
</template>

<script>
export default {
  name: "FeatureContent",
  props: {
    FeatureContent: Object,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
