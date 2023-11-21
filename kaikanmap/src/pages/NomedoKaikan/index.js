import Footer from '../../components/Footer'
import Header from '../../components/Header'
import NomedoKaikanComp from '../../components/NomedoKaikan'

function NomedoKaikan(props){
    return(
        <>   
            <Header isLoggedIn ={props.LoggedIn}/>
            <NomedoKaikanComp/>
            <Footer/>
        </> 
    )
}

export default NomedoKaikan;