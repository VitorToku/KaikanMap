import Footer from '../../components/Footer'
import Header from '../../components/Header'
import HomePage from '../../components/home';
import styled from 'styled-components'

const StyleBody = styled.html`
max-width: 1440px;
margin: 0 auto;  
`

function Home(){
    return(
    <StyleBody>
        <Header/>
        <HomePage/>
        <Footer/>
    </StyleBody>
    )
}

export default Home;