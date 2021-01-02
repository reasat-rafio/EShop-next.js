import { createContext, useContext, useReducer } from "react";
import Reducers from "./Reducers";
interface DataInterface {
   children: React.ReactNode;
}

export const DataContext = createContext<any>("");

export const DataProvider: React.FC<DataInterface> = ({ children }) => {
   const initialState = {
      notify: {},
      auth: {},
   };

   const [state, dispatch] = useReducer<any>(Reducers, initialState);

   return (
      <DataContext.Provider value={[state, dispatch]}>
         {children}
      </DataContext.Provider>
   );
};

export const useCtx = () => useContext(DataContext);
