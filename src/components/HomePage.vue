<template>
  <div class="page home">
    <!-- TODO: Fix download -->
    <h1>About Me</h1>
    <!-- centered is tacky -->
    <p> 
    A full-stack software developer with hands-on experience in system administration and web development. <br/>
    I have a proven track record for reliably solving challenges on time, under pressure and with high attention to detail.  <br/>
    I have practical experience with both front end and back-end technologies, including WebPress, HTML, CSS. <br/>
    To date I have specialized in front-end user experience and have a vested interested in moving into a full-stack environment <br/>
    where i can showcase my full skill-set. I’ve delivered real life efficiencies within my current remit and are devoted to ensuring continuous operation whilst also developing new systems. <br/> 
    Eager to embrace new challenges, i have a history of adapting on the job to deliver tangible results. <br/>
    I am commited to hitting the ground running in any development environment.

    <br/><br/> 
    <!-- TODO: Add funny looking bullet points (ticks) -->
     <h1>Skills</h1>
    

    <ul class="skills-list">
      <li>Java</li>
      <li>Python</li>
      <li>CSS</li>
      <li>HTML</li>
      <li>JavaScript</li>
      <li>SQLite</li>
      <li>WordPress</li>
      <li>AWS</li>
      <li>Git</li>
      <li>TopDesk</li>
    </ul>
    </p>
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
  padding-right: 45px;
  margin: 10;
  
}

.skills-list li {
  position: relative;
  padding-left: 0;
  margin-bottom: 10px;
}

.skills-list li::before {
  content: "";
  position: absolute;
  left:520px;
  top: 0;
  width: 20px;
  height: 20px;
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
