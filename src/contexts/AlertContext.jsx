import { createContext, useContext, useState } from "react";

//CustomProvider
const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  //Definire lo stato iniziale del provider, in cui passare il tipo di alert da generare
  const initialData = { type: "", message: "" };

  //Definizione della variabile di stato
  const [alertData, setAlertData] = useState(initialData);

  //restituzione del provider
  return (
    <AlertContext.Provider value={{ alertData, setAlertData }}>
      {children}
    </AlertContext.Provider>
  );
};

//Custom Hook
const useAlertContext = () => {
  const context = useContext(AlertContext);
  return context;
};

//Export
export { AlertProvider, useAlertContext };
