import React, { createContext, useContext, useState } from "react";

const CopyContext = createContext();

export const useCopy = () => useContext(CopyContext);

export const CopyProvider = ({ children }) => {
  const [copied, setCopied] = useState(0);

  const handleCopy = (id, info) => {
    navigator.clipboard.writeText(info).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(0), 1500);
    });
  };

  return (
    <CopyContext.Provider value={{ copied, setCopied, handleCopy }}>
      {children}
    </CopyContext.Provider>
  );
};
