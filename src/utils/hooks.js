import React, {useState,createContext, useContext} from 'react';

const GlobalContext = createContext({projects: [], films:[],isLoaded: false});

export const useAppContext = ()=> useContext(GlobalContext);

const AppContext = ({children}) => {
    const [globalState, setGlobalState] = useState({projects: []})

    return <GlobalContext.Provider value={[globalState,setGlobalState]}>{children}</GlobalContext.Provider>
}

export default AppContext;
