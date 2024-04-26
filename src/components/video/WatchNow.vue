<template>
  <MyVideo :id="id"></MyVideo>
</template>

<script>
import MyVideo from "./MyVideo.vue";
export default {
  name: "WatchNow",
  components: { MyVideo },
  props: {
    id: {
      require: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
