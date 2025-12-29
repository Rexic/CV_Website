<template>
  <div class="screen-warning">
    <img src="\src\assets\cone.svg" alt="Not optimised" />
    <h1>Site not optimised for mobile</h1>
    <p>Please view on desktop</p>
  </div>
</template>

<script>
export default {
  name: "ScreenSizeWarning",
};
</script>

<style scoped>
.screen-warning {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 24px;
  background: #f9fafb;
}

.screen-warning img {
  width: 120px;
  margin-bottom: 20px;
}

.screen-warning h1 {
  color: #7e22ce;
  margin-bottom: 8px;
}

.screen-warning p {
  color: #4b5563;
}
</style>