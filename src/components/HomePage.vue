<template>
  <div class="page home">
    <h1>About Me</h1>
    <p>
      Other notes etc <br />
      .... <br />
      I'm committed to hitting the ground running in any development environment
    </p>
    <button @click="sayHi">Click Me</button>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    sayHi() {
      alert("Hello from HomePage!");
    }
  }
}
</script>

<style scoped>
.page {
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
</style>
