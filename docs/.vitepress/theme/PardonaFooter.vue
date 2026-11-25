<script setup lang="ts">
import { withBase } from 'vitepress'
import { useSidebar } from 'vitepress/theme'
import { youtubeChannel } from './addons'
import { usePardona } from './usePardona'

const { texts, prefix } = usePardona()
const { hasSidebar } = useSidebar()
</script>

<template>
  <footer v-if="texts" class="pardona-footer" :class="{ 'has-sidebar': hasSidebar }">
    <div class="pardona-footer-inner">
      <p class="pardona-footer-links">
        <a :href="withBase(`${prefix}/legal-notice`)">{{ texts.footer.legalNotice }}</a>
        <span aria-hidden="true"> · </span>
        <a :href="withBase(`${prefix}/privacy`)">{{ texts.footer.privacy }}</a>
        <span aria-hidden="true"> · </span>
        <a :href="youtubeChannel" target="_blank" rel="noopener noreferrer">{{ texts.footer.youtube }}</a>
      </p>
      <p class="pardona-footer-note">{{ texts.footer.trademark }}</p>
    </div>
  </footer>
</template>

<style scoped>
.pardona-footer {
  position: relative;
  z-index: 10;
  border-top: 1px solid var(--vp-c-divider);
  padding: 20px 24px;
  text-align: center;
  font-size: 13px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

/* Keep clear of the fixed sidebar on wide screens. */
@media (min-width: 960px) {
  .pardona-footer.has-sidebar {
    padding-left: calc(var(--vp-sidebar-width) + 24px);
  }
}
@media (min-width: 1440px) {
  .pardona-footer.has-sidebar {
    padding-left: calc((100% - (var(--vp-layout-max-width) - 64px)) / 2 + var(--vp-sidebar-width) - 32px + 24px);
  }
}

.pardona-footer-inner {
  max-width: 960px;
  margin: 0 auto;
}

.pardona-footer p {
  margin: 0;
}

.pardona-footer-links a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.pardona-footer-links a:hover {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
}

.pardona-footer-note {
  margin-top: 4px !important;
}
</style>
