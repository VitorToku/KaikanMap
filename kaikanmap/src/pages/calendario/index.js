import Calendario from "../../components/calendario";
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function CalendarioKaikan(props){
    return(
        <>
        <Header isLoggedIn ={props.LoggedIn}/>
        <Calendario/>
        <Footer/>
        </>
    )
}

export default CalendarioKaikan;