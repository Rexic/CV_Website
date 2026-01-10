<template>
<div class="page">
  <!-- Section title -->
  <h1 class="page-title">About Me</h1>

  <!-- Content -->
  <div class="about">
    <div class="about-text">
          <p>
            Hi! I'm Liam Roach, a full-stack developer with a proven track record in system administration and web development. I'm currently a System Administrator and Web Technician at St Cuthberts College in Auckland.
            To date I have specialized in front-end user experience and have a vested interested in moving into a full-stack position where I can showcase my full skill-set.
            
          
          </p>
          <p>
            I pride myself on my ability to hit the ground running in any environment. With a proven track record for reliably solving challenges on time, I am profound at working under pressure and with high attention to detail.
            I'm currently employed as a System Administrator and Web Technician in Auckland, New Zealand, and am willing to relocate within New Zealand for the right opportunity.
          </p>
        </div>
          <!-- <img
            :src="profileImg"
            alt="Liam Roach"
            class="about-image"
            loading="lazy"
          /> -->
      </div>
     <h1>Skills</h1>
      <div class="skills-columns">
        <div class="skills-column">
          <h3 >Front-End</h3>
          <ul class="skills-list">
            <li>HTML/CSS</li>
            <li>Vue.js</li>
            <li>WordPress</li>
            <li>React</li>
          </ul>
        </div>

        <div class="skills-column">
          <h3>Back-End / Databasing</h3>
          <ul class="skills-list">
            <li>MYSQL</li>
            <li>JavaScript</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
        </div>

        <div class="skills-column">
          <h3>DevOps</h3>
          <ul class="skills-list">
            <li>Git</li>
            <li>Linux Bash Scripting</li>
            <li>AWS using Lightsail + EC2</li>
            <li>CI/CD</li>
          </ul>
        </div>
      </div>
    <h1>Resume</h1>
      <li class="download">
        <BasicButton>
          Click to download as a PDF
        </BasicButton>
      </li>
  </div>
  
</template>

<script>
import BasicButton from "/src/components/BasicButton.vue";
import profileImg from "/src/assets/profile.JPG";

export default {
  name: "HomePage",
  components: {
    BasicButton
  },
  data() {
    return {
      profileImg
    }
  },
  methods: {
    sayHi() {
      alert("Hello from HomePage!");
    }
  }
}
</script>

<style scoped>

.page-title {
  margin-top:0px;
  margin-bottom: 20px;
  text-align: center;
}
.page {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 50px;
}
.about {
  display: flex;
  flex-direction: row;   /* default, but explicit */
  align-items: center;
  justify-content: center;
  gap: 40px;
  max-width: 1020px;
  margin: 0 auto;
  padding-left: 0px;
}

.about-image {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
}

.about-text {
  list-style: none;
  margin: 0px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  padding-top: 7px;
  padding-bottom: 13px;
  padding-left: 20px;
  padding-right: 20px;
  line-height: 2;
}

.about-text p {
  margin-bottom: 12px;
}
.about-text h1{
  text-align: left;
  padding-right: 200px;
}
.page {
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
}
button {
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.downloads {
  text-decoration: none;
  color: #374151; 
  font-weight: 500;
  border-radius: 9999px; 
  transition: 
    background-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;
}

.download {
  display: flex;
  justify-content: center;
}
.skills-columns {
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 0;
  margin-bottom: 20px;
}

.skills-column {
  min-width: 300px;
  max-width: 300px;
}

.skills-column h3 {
  padding-right: 0px;
  margin-bottom: 12px;
  text-align: center;
  color: #7e22ce;
  padding-left: 20px;
  padding-right: 20px;
}

.skills-list {
  list-style: none;
  margin: 0px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  padding-top: 12px;
  padding-bottom: 5px;
}


.skills-list li {
  position: relative;
  padding-left: 25px;
  margin-bottom: 10px;
  text-align: left;
  left: -20px;
  padding-top: 5px;
}

.skills-list li::before {
  content: "";
  position: absolute;
  left: -10px;
  top: 2px;
  width: 25px;
  height: 25px;
  background-image: url("/src/assets/bulletpoint.svg");
  background-repeat: no-repeat;
  background-size: contain;
}


</style>
