import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Language } from '@/types/learning';

interface LanguageState {
  selectedLanguage: Language | null;
  setSelectedLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      selectedLanguage: null,
      setSelectedLanguage: (language) => set({ selectedLanguage: language }),
    }),
    {
      name: 'language-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
