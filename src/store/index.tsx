import { createContext, useContext, useState, ReactNode } from 'react';
import { Command } from '../types';
import { commands as allCommands } from '../data/commands';

interface StoreContextType {
  commands: Command[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const defaultStoreContext: StoreContextType = {
  commands: allCommands,
  searchTerm: '',
  setSearchTerm: () => {},
  darkMode: false,
  toggleDarkMode: () => {},
};

const StoreContext = createContext<StoreContextType>(defaultStoreContext);

export const useStore = () => useContext(StoreContext);

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const value = {
    commands: allCommands,
    searchTerm,
    setSearchTerm,
    darkMode,
    toggleDarkMode,
  };

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
}; 