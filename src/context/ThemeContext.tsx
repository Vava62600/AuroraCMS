import React, { createContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';
type AccentColor = 'blue' | 'green' | 'red' | 'orange' | 'grey';

interface ThemeContextType {
  theme: Theme;
  accent: AccentColor;
  toggleTheme: () => void;
  setAccent: (color: AccentColor) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  accent: 'blue',
  toggleTheme: () => {},
  setAccent: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [accent, setAccent] = useState<AccentColor>('blue');

  useEffect(() => {
    const savedTheme = localStorage.getItem('acms-theme') as Theme | null;
    const savedAccent = localStorage.getItem('acms-accent') as AccentColor | null;
    if (savedTheme) setTheme(savedTheme);
    if (savedAccent) setAccent(savedAccent);
  }, []);

  useEffect(() => {
    localStorage.setItem('acms-theme', theme);
    localStorage.setItem('acms-accent', accent);
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.setProperty('--accent-color', `var(--accent-${accent})`);
  }, [theme, accent]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, accent, toggleTheme, setAccent }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => React.useContext(ThemeContext);