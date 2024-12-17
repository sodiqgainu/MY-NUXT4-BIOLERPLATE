import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: 'light', // Default theme is light
  }),
  actions: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      document.body.classList.toggle('dark', this.theme === 'dark');
    },
  },
});
