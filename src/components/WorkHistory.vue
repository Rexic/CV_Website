<template>
  <section class="projects">
    <h1>Experience</h1>

    <div class="project-grid">
      <div
        v-for="project in projects"
        :key="project.title"
        class="project-card"
      >
        <!-- Image -->
        <div class="image-wrapper" @click="openModal(project.image)">
          <img :src="project.image" :alt="project.title" />
        </div>

        <!-- Content -->
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>

        <!-- Link Button -->
        <div class="links">
          <a :href="project.url" target="_blank" rel="noopener" aria-label="Visit website">
            Visit Site
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
import ImpactReport from "/src/assets/Impact_Desc.png";
import PerformersWorkshop from "/src/assets/PerformersWorkshop.png";
import OGA from "/src/assets/OGA_Desc.png";
import VueWebsite from "/src/assets/VueWebsite.png";

export default {
  name: "WorkHistory",
  data() {
    return {
      activeImage: null,
      projects: [
        {
          title: "Impact Report 2024",
          description: "Portfolio project showing web development & content skills",
          image: ImpactReport,
          url: "https://impact.stcuthberts.school.nz/",
        },
        {
          title: "OGA Fundraising",
          description: "Fundraising campaign website",
          image: OGA,
          url: "https://ogafundraising.stcuthberts.school.nz/",
        },
        {
          title: "The Performers Workshop",
          description: "Showcasing performance training & scheduling site",
          image: PerformersWorkshop,
          url: "https://theperformersworkshop.co.nz/",
        },
        {
          title: "This Website",
          description: "",
          image: VueWebsite,
          url: "",
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
  },
};
</script>

<style scoped>
.projects {
  padding: 80px 20px;
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
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: grid;
  flex-direction: column;
  transition: transform 0.2s ease;
}

.project-card:hover {
  transform: translateY(-5px);
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
}

.links a {
  display: inline-block;
  padding: 6px 12px;
  background-color: rgb(18, 29, 229);
  color: #fff;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s;
}

.links a:hover {
  background-color: #0aa3c1;
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
