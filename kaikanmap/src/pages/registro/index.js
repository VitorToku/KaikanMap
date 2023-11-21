import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Registro from '../../components/registro'

function RegistroK(props){

    return(
       <>
       <Header isLoggedIn ={props.LoggedIn}/>
       <Registro/>
       <Footer/>
       
       </>

    )


}

export default RegistroK;
