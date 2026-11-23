import { computed } from 'vue'
import { useData } from 'vitepress'
import type { PardonaThemeConfig } from '../locales/types'

/** Localized texts and the path prefix of the current language. */
export function usePardona() {
  const { theme, localeIndex } = useData<PardonaThemeConfig>()
  const texts = computed(() => theme.value.pardona)
  const prefix = computed(() => (localeIndex.value === 'root' ? '' : `/${localeIndex.value}`))
  return { texts, prefix }
}
