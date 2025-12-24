<template>
<div class="page home">
  <!-- Section title -->
  <h1 class="page-title">About Me</h1>

  <!-- Content -->
  <div class="about">
    <div class="about-text">
          <p>
            Hi! I'm Liam Roach, a full-stack developer with a proven track record in
            system administration and web development.
          </p>
          <p>
            I pride myself on my ability to hit the ground running in any environment.
          </p>
          <p>
            I'm currently employed as a System Administrator and Web Technician in
            Auckland, New Zealand, and am willing to relocate within New Zealand for
            the right opportunity.
          </p>
        </div>
    <img
      src="\src\assets\profile.JPG"
      alt="Liam Roach"
      class="about-image"
      loading="lazy"
      decoding="async"
    />
      </div>
     <h1>Skills</h1>
      <div class="skills-columns">
        <div class="skills-column">
          <h3 >Front-End</h3>
          <ul class="skills-list">
            <li>HTML/CSS</li>
            <li>Vue.js</li>
            <li>WordPress</li>
          </ul>
        </div>

        <div class="skills-column">
          <h3>Back-End/Databasing</h3>
          <ul class="skills-list">
            <li></li>
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
            <li>AWS Server Management <br/> using Lightsail + EC2</li>
          </ul>
        </div>
      </div>
    <h3>Downloads</h3>
      <li class="download">
        <BasicButton 
          tooltip="Click to download PDF">
          Download CV as PDF
        </BasicButton>
      </li>
  </div>
  
</template>

<script>
import BasicButton from "/src/components/BasicButton.vue";

export default {
  name: "HomePage",
  components: {
    BasicButton
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
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}
.page {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.about {
  display: flex;
  flex-direction: row;   /* default, but explicit */
  align-items: center;
  justify-content: center;
  gap: 40px;
  max-width: 900px;
  margin: 0 auto;
  padding-left: 180px;
}

.about-image {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
}

.about-text {
  padding: 15px;
  margin-left: 20px;
  text-align: left;
  /* border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05); */
}

.about-text p {
  margin-bottom: 12px;
}
.about-text h1{
  text-align: left;
  padding-right: 200px;
}
.page {
  margin-top: 100px;
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
  list-style-position: inside;
  padding: 0;
  margin: 0;
  display: flex;
  text-align: center;
  justify-content: center;
}

.download {
  display: flex;
  justify-content: center;
}

.skills-list {
  list-style: none;
  margin-left: 20px;
  
}

.skills-columns {
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 0;
  margin-left: 70px;
}

.skills-column {
  min-width: 180px;
}

.skills-column h3 {
  padding-right: 45px;
  margin-bottom: 12px;
  text-align: left;
}

.skills-list {
  list-style: none;
  padding-left: 0px;
  margin: 0;
}

.skills-list li {
  position: relative;
  padding-left: 18px;
  margin-bottom: 10px;
  text-align: left;
}

.skills-list li::before {
  content: "";
  position: absolute;
  left: -5px;
  top: 0;
  width: 18px;
  height: 18px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'><path d='M9 6L15 12L9 18M9 12H9.01' stroke='%23000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>");
}


</style>
