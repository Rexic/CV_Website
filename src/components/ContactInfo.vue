<template>
  <div class="contact">
    <h1>Get In Touch</h1>
    <br/>
    For further infomation you can find me here:
    <br />
    <div class="info">
  <!-- Top row: email + phone -->
  <div class="info-top">
    <div class="info-row">
      <svg class="icon" viewBox="0 0 24 24">
        <path d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>liam.roach9215@gmail.com</span>
    </div>
    <div class="info-row">
      <svg class="icon" viewBox="0 0 24 24">
        <path d="M12 18H12.01M11 6H13M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>0224105669</span>
    </div>
  </div>

  <!-- Bottom row: location -->
  <div class="info-row">
    <svg class="icon" viewBox="0 0 24 24">
        <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span>Auckland, New Zealand</span>
  </div>
</div>
    <!-- Add links with icon for linkedin and to take to email -->
     <div class="contact-icons">
    <!-- LinkedIn -->
    <a
      href="https://www.linkedin.com/in/liam-roach-771161251/"
      target="_blank"
      rel="noopener"
      aria-label="LinkedIn profile"
      class="contact-icon"
    >
      <svg width="50px" height="50px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"/></svg>
    </a>
  </div>
  </div>
</template>

<script>
import BasicButton from "/src/components/BasicButton.vue";

export default {
  name: 'ContactMe',
    components: {
    BasicButton
  },
  props: {
    msg: String
  },
  data() {
      return {
        activeLink: null   // store the clicked link
      }
    },
    methods: {
      setActive(linkName) {
        this.activeLink = linkName
      }
    }
  }
</script>

<style scoped>
  .contact {
  text-align: center;
  padding: 70px 40px;
  padding-left: 80px;
}

.contact h2 {
  margin-bottom: 10px;
}

.contact p {
  color: #555;
  margin-bottom: 30px;
}

.contact-icons {
  display: flex;
  justify-content: center;
  gap: 24px;
}

/* Icon button */
.contact-icon {
  width: 48px;
  height: 48px;
  border-radius: 999px;
  background: #f0f0f0;
  color: #000;
  text-decoration: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, transform 0.2s ease;
}

/* Hover effect */
.contact-icon:hover {
  background: #f3e8ff;
  transform: translateY(-2px);
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #590069a3;
}
a.active {
  color: #800096ff; 
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
}

.info-row {
  display: flex;
  align-items: center; 
  gap: 8px;
  margin-bottom: 5px;
}

.info-row svg {
  display: block;
}

.info-top {
  display: flex;
  gap: 15px;
  margin-bottom: 14px;
  flex-wrap: wrap;
}

.icon {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  fill: none;
  flex-shrink: 0;
}

</style>
