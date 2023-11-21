import Footer from '../../components/Footer'
import Header from '../../components/Header'
import HomePage from '../../components/home';
import React,{useState} from 'react'

function Home(props){   

    return(
        <>   
            <Header isLoggedIn ={props.LoggedIn}/>
            <HomePage/>
            <Footer/>
        </> 
    )
}

export default Home;