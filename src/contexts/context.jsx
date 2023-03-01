import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [menuState, setMenuState] = useState(false);
  return (
    <AppContext.Provider value={{ menuState, setMenuState }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
