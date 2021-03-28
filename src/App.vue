<template>
  <div id="nav">
    <router-link to="/">INDEXEDDB PAGE</router-link>
    <router-link to="/localstorage">LOCALSTORAGE PAGE</router-link>
  </div>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#nav {
  background-color: #ddd;
  padding: 1em;
}
#nav a {
  padding: 2em;
}
</style>
