
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Lista from '../../components/Lista-Kaikans'


function ListaKaikan(props){
    return(
        <>
        <Header isLoggedIn ={props.LoggedIn}/>
        <Lista/>
        <Footer/>
        </>
    )
}

export default ListaKaikan;