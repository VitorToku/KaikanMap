import { createContext, useState } from "react";

export const EstaLogado = createContext();

export const LogadoProvider = ({children}) =>{
    const [logado, setLogado] = useState(false);

    const logar = () =>{
        if (logado == false){setLogado(true)}
        else {setLogado(false)}
    }

    return (<EstaLogado.Provider value={{ logado, logar}}>
        {children}
        </EstaLogado.Provider>)
}