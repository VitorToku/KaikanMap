import Footer from '../../components/Footer'
import Header from '../../components/Header'
import HomePage from '../../components/home';

import React,{useState} from 'react'
// import { CloseButton, PopupContainer, PopupContent } from '../../components/popup';

function Home(){   
    
    return(
        <>   
            <Header/>            
            <HomePage/>
            <Footer/>
        </> 
    )
}

export default Home;