"use client";
import { createContext, useState } from "react";

export const AppContext = createContext<any>(null);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {
    currentUser,
    setCurrentUser,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default ContextProvider;