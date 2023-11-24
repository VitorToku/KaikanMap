import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import vitao from '../../img/vitao.png'
import logo from '../../img/logo.png'
import { Link } from "react-router-dom";

const Corpo = styled.div`
    display: grid;
    grid-template-columns: 0.7fr 1.3fr;
    grid-template-areas:
                        "a  m "
                        "s1 s1";

    @media(max-width: 992px){
        grid-template-columns: 1fr;
        grid-template-areas:
                        "a "
                        "m "
                        "s1";
    }
`
const BarraHorizontal = styled.hr`
    width: 50%;
    
`
const Call = styled.p `
margin-top:2rem;
margin-left:1rem;
color:#0D33FC;
font-weight:500;
font-size:16px;


`

const Imp = styled.h3 `
margin-top:2rem;
font-size:36px;
font-weight:500;

`

const Titulo = styled.h2`
color:#003785;

`

const TextoCarrossel = styled.div`
    margin: 20px;
    grid-area: a;
`
const Carrossel = styled.div`
    margin: 0 auto;
    max-width: 700px;
    padding: 50px;
    grid-area: m;
`

const Kaikan = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    background-color: #DCE6EA;
    padding: 30px;
    padding-top:60px;
    padding-bottom:60px;

    grid-area: s1;
    
    @media(max-width: 992px){
        flex-direction: column;        
    }
`
const Logo = styled.img`
    margin: 50px;    
    @media(max-width: 992px){
        margin: 10px;
    }
`
const Descricao = styled.div`
@media(max-width: 992px){
    max-width: 500px;     
}
`

function HomePage() {
    return (                 
            <Corpo>
                <TextoCarrossel>
                    <BarraHorizontal />
                    <Titulo >PROXIMOS EVENTOS</Titulo>
                    <Imp>Venha fazer parte da  nossa comunidade. </Imp>
                    <Call>PROJETO TAIKO</Call>
                </TextoCarrossel>

                <Carrossel>
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={vitao} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={vitao} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={vitao} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </Carrossel>

                <Kaikan>
                    <div id="img"><Logo src={logo} alt="logo"/></div>

                    <Descricao>
                        <hr />
                        <Titulo>O QUE É KAIKAN?</Titulo>
                        <p>
                            Formado a partir dos termos “kai” (que quer dizer reunião) e “kan” (prédio), originalmente “Kaikan” era o nome dado apenas ao espaço onde os imigrantes, ainda pouco integrados ao Brasil, se reuniam para se confraternizar.
                        </p>
                        <p>
                            Segundo a diretora do Museu de Imigração Japonesa de São Paulo, Célia Abe Oi, os Kaikans podem ser entendidos como “associações que tem a finalidade de reunir os descendentes e suas famílias para promover, em conjunto, as atividades sociais,  esportivas e culturais de seu país”.
                        </p>
                    </Descricao>
                </Kaikan>
            </Corpo>
    )

}



export default HomePage