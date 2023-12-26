import React, { createContext, useContext, useReducer } from "react";
const AppCon = createContext();
const ins = {
  isAddMode: true,
  EditUser: undefined,
  logged: undefined,
};
const reducer = (s = ins, { type, payload }) => {
  switch (type) {
    case "setEditMode":
      return {
        ...s,
        isAddMode: false,
        EditUser: payload,
      };
  }
};
function AppProvider({ children }) {
  const [data, dispatch] = useReducer(reducer, ins);
  return (
    <AppCon.Provider value={{ data, dispatch }}>{children}</AppCon.Provider>
  );
}

export default AppProvider;
export const useContextData = () => {
  return useContext(AppCon);
};
