import React, { useState, createContext, ReactNode } from 'react';

// On créé le context
export const SidebarContext = createContext<{ isOpen: boolean, setIsOpen: (isOpen: boolean) => void, handleClose: () => void }>({
  isOpen: false,
  setIsOpen: () => {},
  handleClose: () => {},
});

interface SidebarProviderProps {
  children: ReactNode;
}

const SidebarProvider = ({ children }: SidebarProviderProps) => {
  // State de la barre de navigation pour afficher le panier
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>{children}</SidebarContext.Provider>
  );
};

export default SidebarProvider;
