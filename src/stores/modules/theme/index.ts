import { defineStore } from 'pinia'
import { encrypt } from '@/utils/crypto'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    themeColor: '',
    hoverColor: '',
    theme: 'light'
  }),
  actions: {
    toggleTheme(theme: string) {
      this.theme = theme
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      localStorage.setItem(encrypt('THEME'), encrypt(theme))
    },
    toggleThemeColor(color: string) {
      this.themeColor = color
      document.documentElement.style.setProperty('--theme-color', color)
      localStorage.setItem(encrypt('THEME_COLOR'), encrypt(color))
    },
    toggleHoverColor(color: string) {
      this.hoverColor = color
      document.documentElement.style.setProperty('--hover-color', color)
      localStorage.setItem(encrypt('HOVER_COLOR'), encrypt(color))
    }
  }
})
