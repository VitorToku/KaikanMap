import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Registro_evento from '../../components/Registro_evento'

function Registro_eventoo(props){
    return(
        <>   
            <Header isLoggedIn ={props.LoggedIn}/>
            <Registro_evento/>
            <Footer/>
        </> 
    )
}

export default Registro_eventoo;