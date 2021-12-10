<template>
  <form @click.prevent>
    <input
      type="text"
      placeholder="Search for albums or artists"
      v-model="inputValue"
    />
    <button @click="onButtonClick">Search</button>
  </form>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    onButtonClick() {
      console.log("You searched for: ", this.inputValue);
      this.inputValue = "";
    },
  },
};
</script>

<style scoped>
input {
  min-width: 300px;
  padding: 8px 10px;
}

button {
  margin-left: 5px;
  padding: 8px 10px;
}
</style>
