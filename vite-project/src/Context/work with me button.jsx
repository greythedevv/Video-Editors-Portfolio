import { createContext, useContext } from "react";

export const WWMButton = createContext(null)

export const WWMProvider = ({children}) =>{
    
return(
    <div>
        <WWMButton.Provider value={"View Our Project"}>
            {children}
        </WWMButton.Provider>
    </div>
)

}

