import { create } from 'zustand'

export interface UserStore {
  name: string
  group: string
  theme: string
  isFirstOnSite: boolean
  setUser: (data: Partial<Omit<UserStore, 'setUser'>>) => void
}

const STORAGE_KEY = 'user-store'

const getInitialState = (): Omit<UserStore, 'setUser'> => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(STORAGE_KEY)
    if (data) return JSON.parse(data)
  }
  return {
    name: '',
    group: '',
    theme: 'default',
    isFirstOnSite: true,
  }
}

export const useUserStore = create<UserStore>((set, get) => ({
  ...getInitialState(),
  setUser: (data) => {
    const newState = { ...get(), ...data }
    set(newState)
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        name: newState.name,
        group: newState.group,
        theme: newState.theme,
        isFirstOnSite: newState.isFirstOnSite,
      }))
    }
  },
}))
