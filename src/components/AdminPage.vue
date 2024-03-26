<template>
  <div>
    <h1>Admin</h1>
    <AddVideo />
  </div>
</template>

<script>
import AddVideo from "./Video/AddVideo.vue";
export default {
  name: "AdminPage",
  components: { AddVideo },
  data() {
    return {};
  },
  methods: {},
};
</script>
