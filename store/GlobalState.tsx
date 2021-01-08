import { createContext, useContext, useReducer, useEffect } from "react";
import { getData } from "../utils/fetchData";
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

   const [state, dispatch]: any = useReducer<any>(Reducers, initialState);

   useEffect(() => {
      const firstLogin = localStorage.getItem("firstLogin");
      if (firstLogin) {
         getData("auth/accessToken", 123).then((res) => {
            if (res.err) return localStorage.removeItem("firstLogin");

            dispatch({
               type: "AUTH",
               user: {
                  token: res.access_token,
                  user: res.user,
               },
            });
         });
      }
   }, []);

   return (
      <DataContext.Provider value={{ state, dispatch }}>
         {children}
      </DataContext.Provider>
   );
};

export const useCtx = () => useContext(DataContext);
