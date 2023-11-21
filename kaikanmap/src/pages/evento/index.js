import Footer from '../../components/Footer'
import Header from '../../components/Header'
import DescEvento from '../../components/evento'


function Evento(props){
    return(
        <>
        <Header isLoggedIn ={props.LoggedIn}/>
        <DescEvento/>
        <Footer/>        
        </>
    )
}

export default Evento;