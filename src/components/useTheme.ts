import { ref, watch } from 'vue'

const THEME = 'site:theme'

function getInitialTheme(): boolean {
  if (typeof window === 'undefined') return false
  const saved = localStorage.getItem(THEME)
  if (saved === 'dark') return true
  if (saved === 'light') return false
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

const isDark = ref<boolean>(getInitialTheme())

watch(
  isDark,
  (val) => {
    try {
      localStorage.setItem(THEME, val ? 'dark' : 'light')
    } catch (e) {
    }
    document.documentElement.classList.toggle('dark', val)
    document.documentElement.classList.toggle('light', !val)
  },
  { immediate: true }
)

export function useTheme() {
  function toggleTheme() {
    isDark.value = !isDark.value
  }
  return { isDark, toggleTheme }
}
