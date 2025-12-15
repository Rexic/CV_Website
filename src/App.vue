<template>
  <div id="app">
    <nav class="navbar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/workhistory">Work</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>

    <img alt="bugcat" src="./assets/blue-bugcat.gif" />

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'  // <-- Add this import

export default {
  name: "App",
  components: {
    RouterLink,   // <-- Register them here
    RouterView
  }
}
</script>

<!-- Your <style> block remains unchanged -->