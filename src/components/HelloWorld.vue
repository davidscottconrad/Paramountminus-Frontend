<template>
  <div class="hello">
    <button @click="getTest">test</button>
    <div>
      {{ items }}
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
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
