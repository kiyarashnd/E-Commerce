import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isGridEnable, setIsGridEnable] = useState(true);

  const openGrid = () => {
    setIsGridEnable(true);
  };

  const closeGrid = () => {
    setIsGridEnable(false);
  };

  return (
    <AppContext.Provider
      value={{
        isGridEnable,
        openGrid,
        closeGrid,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
