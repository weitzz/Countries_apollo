import { useQuery } from "@apollo/client";
import { createContext, useContext } from "react";
import { GET_COUNTRIES } from "../../graphql";

const MyContext = createContext()


export const CountriesContextProvider = ({children})=>{

 const {data,loading} =  useQuery(GET_COUNTRIES)
  return <MyContext.Provider value={{
    countries:{
      itens: data ? data.countries : [],
      loading
    }
  }}>
    {children}
    </MyContext.Provider>

}

export const useCountriesContext = () => {
  return useContext(MyContext)
}

