<template>
  <section class="projects">
    <h1>My Projects</h1>
    <br/>
    <br/>

    <div class="project-grid">
      <div
        v-for="project in projects"
        :key="project.title"
        class="project-card"
      >
        <!-- Image -->
        <div class="image-wrapper" @click="openModal(project.image)">
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
    <div v-if="activeImage" class="modal" @click.self="closeModal">
      <img :src="activeImage" alt="Project preview" />
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
    openModal(image) {
      this.activeImage = image;
    },
    closeModal() {
      this.activeImage = null;
    },
     handleProjectClick(project) {
    if (project.newTab) {
      window.open(project.url, "_blank", "noopener");
    } else {
      this.$router.push("/");
    }
  },
    handleKeydown(e){
      if(e.key === "Escape" && this.activeImage){
        this.closeModal();
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
  padding: 70px 20px;
  padding-left: 60px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1800px;
  margin: 0 auto;
}

/* Card */
.project-card {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
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
  padding: 6px 12px;
  color: #000000;
  border-radius: 40px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s;
}

.links a:hover {
    color: #7e22ce;
    background: #f3e8ff;
    border-radius: 40px;
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
</style>
