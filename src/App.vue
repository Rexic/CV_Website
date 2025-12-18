<template>
  <div id="app">
    <nav class="navbar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/workhistory">Work</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>

    <!-- <img alt="bugcat" src="./assets/blue-bugcat.gif" /> -->

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: "App",
  components: {
    RouterLink,
    RouterView
  }
}
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  height: 150%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
}

.navbar {
  position: sticky;
  top: 0;
  background-color: #5900694f;
  padding: 20px 0px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ccc;
  border-color: rgba(162, 162, 162, 0.808);
}

.navbar ul {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 10;
  height: 26px;
}

.navbar a {
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-weight: 900;
  font-size: 120%;
  padding: 24px 48px;
  border-radius: 40px;
  transition: background 0.2s, color 0.2s;
  border: 1px solid rgb(117, 0, 234);
  
}

.navbar a:hover {
  background: #5900694f;
}

.navbar .router-link-active {
  background: #810097;
  color: rgb(255, 255, 255);
}

.main-content {
  flex: 1;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
}
</style>
