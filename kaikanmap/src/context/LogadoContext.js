import { createContext, useState } from "react";

export const EstaLogado = createContext();

export const LogadoProvider = ({children}) =>{
    const [logado, setLogado] = useState(false);
    const [popupAberto, setPopupAberto] = useState(false)
    const [usuario, setUsuario] = useState(null)
    const [id, setId] = useState(null)

    const logar = () =>{
        if (logado == false){setLogado(true)}
        else {
            setLogado(false)
        }
    }
    const abrirPopup = ()=>{
        if(popupAberto == false) {setPopupAberto(true)}
        else{setPopupAberto(false)}
    }
    const fecharPopup = ()=>{
        if(popupAberto == true) {setPopupAberto(false)}
    }
    const defUsuario = (valor) =>{
        setUsuario(valor)
    }
    const defId = (valor) =>{
        setId(valor)
    }

    return (<EstaLogado.Provider value={{ logado, logar, popupAberto, fecharPopup, abrirPopup, usuario, defUsuario, id, defId}}>
        {children}
        </EstaLogado.Provider>)
}