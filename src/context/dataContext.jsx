import { createContext, useState } from "react";
import { restaurantsData } from "../data/data";

export const DataContext = createContext();

// eslint-disable-next-line react/prop-types
export const DataHandler = ({children}) => {
    const [data, setData] = useState(restaurantsData)

    return(
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    )

}