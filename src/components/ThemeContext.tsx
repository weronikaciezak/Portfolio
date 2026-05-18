import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [isDark, setIsDark] = useState<boolean>(() => {
        const savedTheme = localStorage.getItem('app-theme');
        if (savedTheme !== null) {
            return savedTheme === 'dark';
        }
        // Jeśli nie ma ustawionego motywu, użyj preferencji przeglądarki
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('app-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('app-theme', 'light');
        }
    }, [isDark]);

    // Słuchaj zmian preferencji motywu przeglądarki
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e: MediaQueryListEvent) => {
            const savedTheme = localStorage.getItem('app-theme');
            if (savedTheme === null) {
                // Tylko zmień motyw jeśli użytkownik nie ustawił go ręcznie
                setIsDark(e.matches);
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme musi być użyte wewnątrz ThemeProvider");
    return context;
};