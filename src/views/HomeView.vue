<template>
  <div>
    <div class="black-bar">
      <div class="black-bar-text">
        <a href="https://www.paramountplus.com/home/">Paramount+ Clone</a>
        <p>
          This project is a clone of Paramount+ developed to demonstrate my web
          development skills and experience. It is not affiliated with or
          endorsed by Paramount+
        </p>
      </div>
    </div>
    <HomePage />
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from "@/components/HomePage.vue";

export default {
  name: "HomeView",
  components: {
    HomePage,
  },
};
</script>

<style scoped>
.black-bar {
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
}

.black-bar-text {
  color: white;
  text-align: center;
}

.black-bar-text a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
}

.black-bar-text p {
  margin-top: 5px;
  font-size: 14px;
}
@media (max-width: 768px) {
  .black-bar {
    display: none;
  }
}
</style>
