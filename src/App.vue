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
  height: 100%;
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
  background: #fff;
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ccc;
  border-color: black;
}

.navbar ul {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
  
}

.navbar a {
  text-decoration: none;
  color: blue;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 10px;
  transition: background 0.2s, color 0.2s;
  border: 1px solid rgb(0, 25, 252);
}

.navbar a:hover,
.navbar .router-link-active {
  background: #eee;
}

.main-content {
  flex: 1;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
}
</style>
