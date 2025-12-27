<template>
  <div class="button-wrapper">
    <button
      class="basic-button"
      @click="downloadPdf"
      :aria-label="tooltip || 'Download Resume'"
    >
      <slot>Download Resume</slot>
    </button>

    <div v-if="tooltip" class="tooltip">
      {{ tooltip }}
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicButton",
  props: {
    tooltip: {
      type: String,
      default: ""
    }
  },
  methods: {
downloadPdf() {
  fetch("/cv.pdf")
    .then(res => res.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Liam_Roach_CV.pdf";
      a.click();
      window.URL.revokeObjectURL(url);
    });
}
  }
};
</script>

<style scoped>
.button-wrapper {
  position: relative;
  display: inline-block;
}

.basic-button {
  cursor: pointer;
  text-decoration: none;
  color: #ffffff; 
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 9999px; 
  background-color: #9333ea;
  transition: 
    background-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;
}

.basic-button:hover {
  background: #a855f7;
  color: white;
  transform: translateY(-2px);
}

/* Tooltip */
.tooltip {
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background: #ffffff;
  color: #000000;
  padding: 6px 10px;
  font-size: 12px;
  border-radius: 4px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.button-wrapper:hover .tooltip {
  opacity: 1;
  transform: translateX(-50%) translateY(-4px);
}
</style>
