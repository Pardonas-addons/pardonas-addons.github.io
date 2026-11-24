<script setup lang="ts">
import HomeHero from './HomeHero.vue'
import HomePillars from './HomePillars.vue'
import HomeAddons from './HomeAddons.vue'
import HomeNews from './HomeNews.vue'
import OrnamentDivider from './OrnamentDivider.vue'
</script>

<template>
  <div class="home-page">
    <HomeHero />
    <OrnamentDivider size="large" class="home-page-divider" />
    <HomePillars />
    <HomeNews />
    <HomeAddons />
  </div>
</template>

<style scoped>
.home-page {
  background-color: #140821;
  background-image: linear-gradient(180deg, #2a1240 0, #140821 780px);
  background-repeat: no-repeat;
}

.home-page-divider {
  padding: 0 24px;
}
</style>
