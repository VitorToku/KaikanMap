import logo from '../../img/logotipo.png'
import ods1 from '../../img/ods3.png'
import ods2 from '../../img/ods11.jpg'
import styled from 'styled-components'

const PrimeiraParte = styled.div`
    display: flex;
    flex-wrap: wrap;   
    gap: 1rem 2rem; 
    width: 33%;

    @media(max-width:992px){
        width: 100%;
    }
`
const Ods = styled.img`
    width: 4.563rem;
    height: 4.563rem;
    transition: transform0.4s;
    &:hover{
        transform:scale(1.2);
    }

    @media(max-width:992px){
        display:none;
    }
`
const Logo = styled.img `
    min-width: 90px;
`
const Texto = styled.div`
    display: flex;
    justify-items: center; 
    align-items: center;
    height: 6.125rem;    
    width: 80%;
    color:#DCE6EA;    
    font-size: 1.2rem;

    @media(max-width:992px){
        font-size:15px;
        width:50%;
    }
`
const LogoETitulo = styled.div`
    width:100%;
    display:flex;
    align-items: center;
    gap: 20px;

    @media(max-width:992px){        
        width: 50%;
    }
`

function LogoOds(){
    return(
        <PrimeiraParte>
            <LogoETitulo>
                <Logo src={logo} />  
                <Texto><p> KAIKAN MAP</p></Texto>
            </LogoETitulo>
            <Ods src={ods1} alt="ods3"/>
            <Ods src={ods2} alt="ods11"/>
        </PrimeiraParte>
    )
}
export default LogoOds