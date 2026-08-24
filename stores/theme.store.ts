import { create } from 'zustand';

type ThemeValue = 'light' | 'dark'

type ThemeStore = {
    theme: 'light' | 'dark';
    setTheme: (theme: ThemeValue) => void;
}

export const themeStore = create<ThemeStore>((set) => ({
    theme: 'light',
    setTheme(theme: ThemeValue) {
        set({ theme });
    },
}));
