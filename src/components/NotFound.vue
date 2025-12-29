<template>
  <div class="page not-found">
    <main class="content">
      <div class="card">
        <h1 class="error-code">404</h1>

        <div class="error-title">
          <h2>Page Not Found</h2>
        </div>

        <p class="description">
          Oops! The page you're looking for doesn't exist.
          It may have been moved or deleted.
        </p>

        <router-link to="/" class="home-button">
          Back to Home
        </router-link>

        <!-- Decorative dots -->
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found {
    padding-top: 100px;
}

/* Center content */
.content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
}

/* Card */
.card {
  text-align: center;
  max-width: 420px;
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

/* 404 */
.error-code {
  font-size: 6rem;
  color: #7e22ce;
  margin-bottom: 10px;
}

/* Title */
.error-title {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #374151;
  margin-bottom: 16px;
}

.error-title h2 {
  font-size: 1.2rem;
}

.description {
  color: #4b5563;
  margin-bottom: 30px;
}

/* Button */
.home-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: #9333ea;
  color: white;
  border-radius: 9999px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s ease, transform 0.15s ease;
}

.home-button:hover {
  background: #7e22ce;
  transform: translateY(-1px);
}

/* Decorative dots */
.dots {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 6px;
}

.dots span {
  width: 8px;
  height: 8px;
  background: #9333ea;
  border-radius: 50%;
  animation: bounce 1.2s infinite ease-in-out;
}

.dots span:nth-child(2) {
  animation-delay: 0.15s;
}

.dots span:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes bounce {
  0%, 80%, 100% {
    transform: translateY(0);
    opacity: 0.6;
  }
  40% {
    transform: translateY(-6px);
    opacity: 1;
  }
}
</style>