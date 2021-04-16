import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
const initialValue = {
  minimalist: false,
};

export const GlobalProvider = ({ children }) => {
  const [config, setConfig] = useState(initialValue);

  const ToggleMinimalist = (value = null) => {
    let tmp = config.minimalist;
    if (value === null) tmp = !tmp;
    else tmp = value;
    setConfig({
      ...config,
      minimalist: tmp,
    });
  };

  return (
    <GlobalContext.Provider value={{ config, ToggleMinimalist }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  return context;
};
