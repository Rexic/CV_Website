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
    />
      </div>
     <h1>Skills</h1>
      <div class="skills-columns">
        <div class="skills-column">
          <h3 >DevOps</h3>
          <ul class="skills-list">
            <li>AWS Server Management <br/> using Lightsail + EC2</li>
            <li>Git</li>
            <li>Linux</li>
            <li>MYSQL</li>
          </ul>
        </div>

        <div class="skills-column">
          <h3>WebDev</h3>
          <ul class="skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Vue.js</li>
            <li>WordPress</li>
          </ul>
        </div>

        <div class="skills-column">
          <h3>Other</h3>
          <ul class="skills-list">
            <li>Java</li>
            <li>Python</li>
            <li>C</li>
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
  margin-top: 20;
  margin-bottom: 40px;
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
  background: #fafafa;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.about-text p {
  margin-bottom: 12px;
}
.about-text h1{
  text-align: center;
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
  margin: 10;
  
}

.skills-columns {
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 0;
}

.skills-column {
  min-width: 180px;
}

.skills-column h3 {
  padding-right: 45px;
  margin-bottom: 12px;
  text-align: center;
}

.skills-list {
  list-style: none;
  padding-left: 15px;
  margin: 0;
}

.skills-list li {
  position: relative;
  padding-left: 28px;
  margin-bottom: 10px;
  text-align: left;
}

.skills-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.2em;
  width: 18px;
  height: 18px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>\
<path fill='%23d700fd' d='M437.02,74.98C388.667,26.628,324.25,0,255.87,0S123.333,26.628,74.98,74.98C26.628,123.333,0,187.62,0,256s26.628,132.667,74.98,181.02C123.333,485.372,187.49,512,255.87,512s132.797-26.628,181.15-74.98C485.372,388.667,512,324.38,512,256S485.372,123.333,437.02,74.98z'/>\
<path fill='%233e0048' d='M398.454,113.546c-38.051-38.052-88.772-59.007-142.584-59.007s-104.273,20.955-142.325,59.007C75.494,151.597,54.539,202.188,54.539,256s20.955,104.403,59.007,142.454c38.05,38.052,88.511,59.007,142.324,59.007s104.534-20.955,142.584-59.007c38.052-38.051,59.007-88.642,59.007-142.454S436.506,151.597,398.454,113.546z'/>\
<path fill='%23d700fd' d='M225.38,368.767c-10.332,0-20.241-4.105-27.547-11.41l-68.094-68.094c-15.213-15.213-15.213-39.879,0-55.093c15.214-15.212,39.88-15.213,55.093,0l40.547,40.547l101.936-101.936c15.214-15.213,39.879-15.213,55.093,0c15.213,15.213,15.213,39.879,0,55.092L252.926,357.357C245.621,364.663,235.711,368.767,225.38,368.767z'/>\
</svg>");
}


</style>
