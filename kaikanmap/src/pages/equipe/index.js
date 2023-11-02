import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import style from '../equipe/style.css'
import { Link } from "react-router-dom";
import Equipe from '../../components/Equipe'
import Header from '../../components/Header'
import Footer from '../../components/Footer'



function Equipee()
{
    return(
        <>
        <Header/>
        <Equipe/>
        <Footer/>
        </>
    )
}

export default Equipee