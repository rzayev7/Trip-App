import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [menuOpened, setMenuOpened] = useState();

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <AppContext.Provider value={{ menuOpened, toggleMenu }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);



