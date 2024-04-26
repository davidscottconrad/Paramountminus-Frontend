<template>
  <div class="navbar">
    <div>
      <ul>
        <li>
          <a href="">
            <img
              class="p-2"
              :src="logoImage"
              alt="Paramount+ Clone"
              style="height: 40px"
            />
          </a>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li><a href="">Resume</a></li>
        <li>
          <a href="https://github.com/davidscottconrad/django9"
            >Backend Github</a
          >
        </li>
        <li>
          <a href="https://github.com/davidscottconrad/frontend-netflax"
            >FrontEnd GitHub</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PMLogo from "@/assets/pmlogo.png";

export default {
  name: "NavBar",
  data() {
    return {
      logoImage: PMLogo,
    };
  },
};
</script>

<style scoped>
.navbar {
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}
.navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}
.navbar li {
  margin: 0 10px;
}
.navbar a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  transition: color 0.3s ease;
}
.navbar a:hover {
  color: #ccc;
}
</style>
