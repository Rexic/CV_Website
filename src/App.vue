<template>
  <div id="app">
    <!-- Screen too small -->
    <ScreenSizeWarning v-if="!isDesktop" />

    <!-- Normal app -->
    <div v-else>
      <nav class="navbar">
        <ul>
          <li><router-link to="/myprojects">My Projects</router-link></li>
          <li><router-link to="/aboutme">About Me</router-link></li>
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
  padding: 12px 0;
  display: flex;
  justify-content: center;
  width: 100%;
}

.navbar ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr auto 1fr; 
  align-items: center;
  width: 100%;
  max-width: 800px;
}

/* 1. Left Button (My Projects) */
.navbar li:nth-child(1) {
  justify-self: end; 
  margin-right: 10px;
}

/* 2. Center Button (About Me) */
.navbar li:nth-child(2) {
  justify-self: center;
}

/* 3. Right Button (Contact) */
.navbar li:nth-child(3) {
  justify-self: start;
  margin-left: 10px;
}

.navbar a {
  display: inline-block;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  color: #374151;
  font-weight: 500;
  font-size: clamp(0.9rem, 1vw, 1rem);
  border-radius: 9999px;
  white-space: nowrap;
  transition: all 0.2s ease;
  min-width: 110px; 
}

.navbar a:hover {
  background-color: #f3e8ff; 
  color: #7e22ce; 
}


/* Active State */
.navbar .router-link-active {
  background-color: #9333ea;
  color: #ffffff;
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
