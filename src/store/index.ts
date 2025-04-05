import { create } from 'zustand'
import { Command } from '../types'
import { commands } from '../data/commands'

interface CommandStore {
  commands: Command[]
  searchTerm: string
  selectedCategory: string | null
  selectedTag: string | null
  darkMode: boolean
  setSearchTerm: (term: string) => void
  setSelectedCategory: (category: string | null) => void
  setSelectedTag: (tag: string | null) => void
  toggleDarkMode: () => void
}

export const useStore = create<CommandStore>((set) => ({
  commands: commands,
  searchTerm: '',
  selectedCategory: null,
  selectedTag: null,
  darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
  setSearchTerm: (term) => set({ searchTerm: term }),
  setSelectedCategory: (category) => set({ selectedCategory: category, selectedTag: null }),
  setSelectedTag: (tag) => set({ selectedTag: tag, selectedCategory: null }),
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
})) 