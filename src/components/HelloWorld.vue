<template>
  <div class="hello">
    <button @click="getTest">test</button>
    <div>
      {{ items }}
    </div>
    <GetVideoMetaData></GetVideoMetaData>
  </div>
</template>

<script>
import GetVideoMetaData from "./GetVideoMetaData.vue";

export default {
  name: "HelloWorld",
  components: {
    GetVideoMetaData,
  },
  props: {
    msg: String,
  },

  data() {
    return { items: null };
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
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
