import React, { createContext, useContext, useState } from "react";

// Define the context type
type CounterContextType = {
  url?: string;
};

// Create the CounterContext
const MFormContext = createContext<CounterContextType | undefined>(undefined);


// Custom hook to access the counter context
export const useMFormProvider = () => {
  const context = useContext(MFormContext);

  if (!context) {
    throw new Error('useMFormProvider must be used within a MFormProvider');
  }

  return context;
};

type FormProviderProps = {
  children: React.ReactNode,
  url?: string,
}

// provider component
export const MFormProvider: React.FC<FormProviderProps> = ({ children, url: urlProp }) => {
  const [url] = useState<string | undefined>(urlProp);

  const contextValue: CounterContextType = {
    url,
  };

  return (
    <MFormContext.Provider value={contextValue}>
      {children}
    </MFormContext.Provider>
  );
};
