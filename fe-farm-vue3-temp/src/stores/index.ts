import { defineStore } from 'pinia'
interface ILanguage {
  language: string
}

export const useLangStore = defineStore('lang', {
  state: (): ILanguage => {
    return {
      language: sessionStorage.getItem('localeLang') || 'zh',
    }
  },
  actions: {
    changeLang(data: 'zh' | 'en') {
      this.language = data
    },
  },
  persist: true,
})
