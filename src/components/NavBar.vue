<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link class="tab" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="tab" to="/list">List</router-link>
        </li>
        <li>
          <router-link class="tab" to="/stats">Stats</router-link>
        </li>
      </ul>
    </nav>

    <div class="avatarContainer">
      <router-link class="avatarLink" to="/profile">
        <div class="avatar"></div>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
ul {
  display: flex;
  list-style: none;
}

header,
li {
  /* height added to avoid glitches with active status */
  height: 40px;
}

.tab {
  padding: 10px 25px;
  display: block;
}

.tab.router-link-active {
  border-bottom: 2px solid gray;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
}

.avatarContainer {
  margin-right: 25px;
}

.avatarLink {
  display: block;
}
.avatarLink.router-link-active {
  display: block;
}

.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  background-color: lightgray;
}
</style>
