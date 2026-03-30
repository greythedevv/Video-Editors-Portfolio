import { createContext, useState } from "react";

export const VOWButton = createContext(null)

export const VOPProvider = ({children}) =>{

     const [clicked, setClicked] = useState(false);

  // Function to toggle the button state
  const toggleClick = () => setClicked(prev => !prev);
  
return(
    <div>
        <VOWButton.Provider value={{ clicked, toggleClick }}>
            {children}
        </VOWButton.Provider>
    </div>
)

}

