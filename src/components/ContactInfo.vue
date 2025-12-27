<template>
  <div class="contact">
    <h1>Get in Touch</h1>
    <br/>
    For further infomation you can find me here:
    <br /><br /><br /><br />
    <!-- Add links with icon for linkedin and to take to email -->
     <div class="contact-icons">
    <!-- Email -->
    <a
      href="mailto:liam.roach9215@gmail.com"
      aria-label="Send email"
      class="contact-icon"
    >
      <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>

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
      },
      downloadPdf() {
      const link = document.createElement("a");
      link.href = "./src/assets/Liam_Roach_Resume.pdf";
      link.setAttribute("download", "Liam_Roach_Resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    }
  }
</script>

<style scoped>
  .contact {
  text-align: center;
  padding: 100px 40px;
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
  color: #800096ff;   /* or whatever colour you want */
}
</style>
