<template>
  <div>
    <v-app>
      <v-toolbar-title id="app">OS GRANDES WORDS DA VIDA</v-toolbar-title>
      <v-content>
        <HomePage />
      </v-content>
    </v-app>
  </div>
</template>

<script>
import HomePage from "./components/HomePage";

export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #19426b;
  margin-top: 60px;
}
</style>
