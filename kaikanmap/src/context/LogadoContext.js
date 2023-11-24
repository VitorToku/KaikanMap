import { createContext, useState } from "react";

export const EstaLogado = createContext();

export const LogadoProvider = ({children}) =>{
    const [logado, setLogado] = useState(false);
    const [popupAberto, setPopupAberto] = useState(false)

    const logar = () =>{
        if (logado == false){setLogado(true)}
        else {setLogado(false)}
    }
    const abrirPopup = ()=>{
        if(popupAberto == false) {setPopupAberto(true)}
    }
    const fecharPopup = ()=>{
        if(popupAberto == true) {setPopupAberto(false)}
    }

    return (<EstaLogado.Provider value={{ logado, logar, popupAberto,fecharPopup,abrirPopup}}>
        {children}
        </EstaLogado.Provider>)
}