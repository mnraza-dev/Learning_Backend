import React from "react";
export const dataContext = React.createContext();
const UserContext = ({ children }) => {
  const serverURL = "http://localhost:8080";
  const value = {
    serverURL,
  };
  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};

export default UserContext;
