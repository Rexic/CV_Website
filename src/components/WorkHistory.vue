<template>
  <section class="projects">
    <h1>My Projects</h1>
    <h3>Hi! Here's a collection of my professional projects :)</h3>
    <br/>

    <div class="project-grid">
      <div
        v-for="(project, index) in projects"
        :key="project.title"
        class="project-card"
      >
        <!-- Image -->
        <div class="image-wrapper" @click="openModalByIndex(index)">
          <div v-if="!project.loaded" class="image-placeholder"></div>

          <img
            :src="project.image"
            :alt="project.title"
            loading="lazy"
            decoding="async"
            @load="project.loaded = true"
            :class="{ visible: project.loaded }"
          />
        </div>
        <!-- TODO Arrow keys to move between images maybe interactable arrows also-->
        <!-- Content -->
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>

        <!-- Link Button -->
        <div class="links">
          <a
            v-if="project.url"
            href="#"
            @click.prevent="handleProjectClick(project)"
            aria-label="Visit website"
          >
          <svg width="35px" height="35px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="currentColor" fill="none"><path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"/><path d="M37.86,51.1A47,47,0,0,1,32,56.7"/><path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"/><path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24"/><line x1="10.37" y1="19.9" x2="53.75" y2="19.9"/><line x1="32" y1="6.99" x2="32" y2="56.7"/><line x1="11.05" y1="45.48" x2="37.04" y2="45.48"/><line x1="7.14" y1="32.46" x2="56.86" y2="31.85"/><path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"/></svg>  
          </a>
        </div>
      </div>
    </div>

    <!-- Modal -->
  <div v-if="activeIndex !== null" class="modal" @click.self="closeModal">
    <!--Arrows on sides of model-->
    <button
      class="nav-arrow left"
      @click.stop="prevProject"
      :disabled="activeIndex === 0"
    >
      ‹
    </button>
    <button
      class="nav-arrow right"
      @click.stop="nextProject"
      :disabled="activeIndex === projects.length - 1"
      >>
      ›
    </button>
    <img
      :src="projects[activeIndex].image"
      :alt="projects[activeIndex].title"
    />
  </div>
  </section>
</template>

<script>
import ImpactReport from "/src/assets/Impact.png";
import PerformersWorkshop from "/src/assets/Perf.png";
import OGA from "/src/assets/OGA.png";
import VueWebsite from "/src/assets/VueWebsite.png";

export default {
  name: "WorkHistory",
  data() {
    return {
      activeIndex: null,
      activeImage: null,
      projects: [
        {
          title: "Impact Report 2024",
          description: "A site to highlight the support that St Cuthbert's received over the year and the impact of that support",
          image: ImpactReport,
          url: "https://impact.stcuthberts.school.nz/",
          loaded: false,
          newTab: true,
        },
        {
          title: "OGA Fundraising",
          description: "A site for the Old Girls Association (OGA) fundraising initiative that sells umbrellas for charity",
          image: OGA,
          url: "https://ogafundraising.stcuthberts.school.nz/",
          loaded: false,
          newTab: true,
        },
        {
          title: "The Performers Workshop",
          description: "A site to view and book different workshops at St Cuthbert's College performing arts center",
          image: PerformersWorkshop,
          url: "https://theperformersworkshop.co.nz/",
          loaded: false,
          newTab: true,
        },
        {
          title: "Personal CV Website",
          description: "A site to showcase some of my skillset implemented in Vue.js and hosted using AWS Lightsail",
          image: VueWebsite,
          url: "https://www.hireliamroach.com/",
          loaded: false,
          newTab: false,
        },
      ],
    };
  },
  methods: {
    openModalByIndex(index) {
      this.activeIndex = index;
    },
    closeModal() {
      this.activeIndex = null;
    },
     handleProjectClick(project) {
    if (project.newTab) {
      window.open(project.url, "_blank", "noopener");
    } else {
      this.$router.push("/aboutme");
    }
  },

  nextProject() {
    if (this.activeIndex < this.projects.length - 1) {
      this.activeIndex++;
    }
  },
  prevProject() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  },

  handleKeydown(e) {
    if (this.activeIndex !== null) {
      if (e.key === "Escape") this.closeModal();
      if (e.key === "ArrowRight") this.nextProject();
      if (e.key === "ArrowLeft") this.prevProject();
    }
  },

  handleProjectClick(project) {
    if (project.newTab) {
      window.open(project.url, "_blank", "noopener");
    } else {
      this.$router.push("/aboutme");
    }
  }
  },
  mounted() {
  window.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  },
};
</script>

<style scoped>
.projects {
  padding: clamp(2rem, 8vh, 4rem) 5%;
  max-width: 1600px;
  margin: 0 auto;
}

.projects h1{
  padding: 10px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

/* Card */
.project-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  display: grid;
  flex-direction: column;
  transition: transform 0.2s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 40px 80px rgba(158, 92, 162, 0.4);
}

/* Image */
.image-wrapper {
  height: 200px;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 15px;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-wrapper:hover img {
  transform: scale(1.05);
}

/* Text */
.project-card h3 {
  margin: 0 0 8px;
  font-size: 1.2rem;
}

.project-card p {
  flex-grow: 1;
  color: #555;
  font-size: 0.95rem;
}

/* Links */
.links {
  margin-top: 10px;
  border-radius: 6px;
  border-color: black;
}

.links a {
  display: inline-block;
  padding: 4px 8px;
  color: #000000;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s;
  margin-bottom: 2px;
}

.links a:hover {
    color: #7e22ce;
    background: #f3e8ff;
    border-radius: 30px;
}

/* Modal */
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.modal img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 12px;
}

.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 4rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 1rem;
  opacity: 0.8;
  transition: opacity 0.2s, transform 0.2s;
}

.nav-arrow:hover:not(:disabled) {
  opacity: 1;
  transform: translateY(-50%) scale(1.1);
}

.nav-arrow:disabled {
  opacity: 0.3;
  cursor: default;
}

.nav-arrow.left {
  left: 2rem;
}

.nav-arrow.right {
  right: 2rem;
}
</style>
