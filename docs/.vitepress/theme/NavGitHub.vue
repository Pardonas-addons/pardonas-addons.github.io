<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { VPSocialLinks } from 'vitepress/theme'
import { githubLinkForPath } from './addons'
import { usePardona } from './usePardona'

/**
 * GitHub icon of the nav bar ('bar') and the mobile nav screen ('screen').
 * Replaces themeConfig.socialLinks so the link can follow the current section:
 * the addon's repository inside its handbook, the organisation elsewhere.
 * VPSocialLinks keeps the default look and registers the icon for the build.
 */
withDefaults(defineProps<{ variant?: 'bar' | 'screen' }>(), { variant: 'bar' })

const route = useRoute()
const { texts, prefix } = usePardona()

const links = computed(() => [
  { icon: 'github' as const, link: githubLinkForPath(route.path, prefix.value), ariaLabel: texts.value.githubAria }
])
</script>

<template>
  <VPSocialLinks :class="['nav-github', `nav-github--${variant}`]" :links="links" />
</template>

<style scoped>
/* Visible from the tablet nav bar up; below 768px it is in the mobile nav screen. Flush right. */
.nav-github--bar {
  display: none;
  margin-right: -8px;
}

@media (min-width: 768px) {
  .nav-github--bar {
    display: flex;
    align-items: center;
  }
}
</style>
