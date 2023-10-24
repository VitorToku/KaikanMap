import logo from '../../img/logotipo.png'
import ods1 from '../../img/ods3.png'
import ods2 from '../../img/ods11.jpg'
import styled from 'styled-components'

const PrimeiraParte = styled.div`
    display: flex;
    flex-wrap: wrap;   
    gap: 1rem 2rem; 
    width: 33%;
`
const Ods = styled.img`
    width: 4.563rem;
    height: 4.563rem;
`
const Logo = styled.img `
    width: 30%;
`
const Texto = styled.div`
    display: flex;
    justify-items: center; 
    align-items: center;
    height: 6.125rem;    
    width: 60%;
    color:#DCE6EA;    
    font-size: 1.2rem;
`

function LogoOds(){
    return(
        <PrimeiraParte>
            <Logo src={logo} />  
            <Texto><p> KAIKAN MAP</p></Texto>
            <Ods src={ods1} alt="ods3"/>
            <Ods src={ods2} alt="ods11"/>
        </PrimeiraParte>
    )
}
export default LogoOds