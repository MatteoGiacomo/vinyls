<template>
  <h2>List</h2>
  <SearchBar class="searchForm"/>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
export default {
  name: "List",
  components: {
    SearchBar,
  },
};
</script>

<style scoped>
.searchForm {
  margin-top: 20px;
}

</style>
