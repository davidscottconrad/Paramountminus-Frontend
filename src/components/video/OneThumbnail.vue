<template>
  <div class="max-w-xs max-h-xs">
    <img style="max-height: 40px" :src="signed_url" alt="" />
  </div>
</template>

<script>
export default {
  name: "OneThumbnail",
  props: {
    id: {
      require: true,
    },
  },
  data() {
    return {
      signed_url: String,
    };
  },
  mounted() {
    this.getThumbnail();
  },
  methods: {
    getThumbnail() {
      const url = "/thumbnail/?id=" + this.id;

      this.$axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          this.signed_url = response.data.signed_url;
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          // alert("Error ");
          // Handle error
        });
    },
  },
};
</script>
