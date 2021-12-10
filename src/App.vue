<template>
  <NavBar />
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #232323;
}

a {
  text-decoration: none;
}

a:visited {
  color: inherit;
}

main {
  padding: 20px;
}

</style>
