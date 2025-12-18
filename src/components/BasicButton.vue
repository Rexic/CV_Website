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
      const link = document.createElement("a");
      link.href = "/Liam_Roach_Resume.pdf"; // PDF in public folder
      link.setAttribute("download", "Liam_Roach_Resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
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
  padding: 10px 20px;
  border: 2px solid #590069a3;
  color: #590069a3;
  background: white;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.basic-button:hover {
  background: #590069a3;
  color: white;
}

/* Tooltip */
.tooltip {
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: #fff;
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
