<template>
  <div id="app">
    <!-- Screen too small -->
    <ScreenSizeWarning v-if="!isDesktop" />

    <!-- Normal app -->
    <div v-else>
      <nav class="navbar">
        <ul>
          <li><router-link to="/">About Me</router-link></li>
          <li><router-link to="/projects">My Projects</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>

      <main class="main-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import ScreenSizeWarning from '/src/components/ScreenSizeWarning.vue'

export default {
  name: "App",
  components: {
    RouterLink,
    RouterView,
    ScreenSizeWarning
  },
  data() {
    return {
      isDesktop: window.innerWidth > 1024
    }
  },
  mounted() {
    this.onResize = () => {
      this.isDesktop = window.innerWidth > 1024
    }
    window.addEventListener('resize', this.onResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize)
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
  z-index: 50;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  padding: 16px 0;
  display: flex;
  justify-content: center;
}

/* Container */
.navbar ul {
  display: flex;
  gap: 8px;
  list-style: none;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0;
  padding-right: 40px;
}

/* Nav links = pill buttons */
.navbar a {
  text-decoration: none;
  color: #374151; 
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 9999px; 
  transition: 
    background-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;
}

.navbar a:hover {
  background-color: #f3e8ff; 
  color: #7e22ce; 
}

.navbar .router-link-active {
  background-color: #9333ea;
  color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
.navbar .router-link-active:hover {
  background-color: #a855f7;
  color: #ffffff;
}

.main-content {
  flex: 1;
  padding: 40px;
  max-width: 9000px;
  margin: 0 auto;
}
</style>
