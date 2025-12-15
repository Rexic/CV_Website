<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener"
    @click="activate"
    @mousedown.middle="activate"
    :class="{ active: isActive }"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    href: String,
    name: String,     // unique id for the link
    activeName: String
  },
  computed: {
    isActive() {
      return this.activeName === this.name
    }
  },
  methods: {
    activate() {
      this.$emit('update:activeName', this.name)
    }
  }
}
</script>