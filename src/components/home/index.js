import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import style from '../../style.css'
import vitao from '../../img/vitao.png'
import logo from '../../img/logo.png'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";

const Containe = styled.div
    `

    .containe{
        display: grid;
        gap: 12px;
         grid-template-columns: 1fr, 1fr;
         grid-template-columns: 1fr, 1fr;
         grid-template-rows:  2fr, 2fr, 1.6fr;
         grid-template-areas:
                            "a m"
                            "s1 s1 "
                            ;
            }
`

const Aside = styled.aside
    `
grid-area:a;
`


const Main = styled.main
    `
grid-area: m;
`

const Section1 = styled.section
    `
grid-area: s1;
`


function HomePage() {
    return (
        <div class="containe">

            <aside>
                <hr class="fst-hr" />
                <h2 class="impText">PROXIMOS EVENTOS</h2>
                <h3 class="call">Venha fazer parte da <br /> nossa comunidade. </h3>
                <p class="description">PROJETO TAIKO</p>


            </aside>
            <main>
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={vitao} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src={vitao } class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </main>
          <section class="separar"/>

            <section id="sec1">
                <div id="img"><img class=" " src={logo} alt="logo" /></div>

                <div class="words  divisao">
                    <hr />
                    <h2 id="KAIKAN2">O QUE É KAIKAN?</h2>
                    <p>
                        Formado a partir dos termos “kai” (que quer dizer reunião) e “kan” (prédio), originalmente “Kaikan” era o nome dado apenas ao espaço onde os imigrantes, ainda pouco integrados ao Brasil, se reuniam para se confraternizar.
                    </p><br />
                    <p>
                        Segundo a diretora do Museu de Imigração Japonesa de São Paulo, Célia Abe Oi, os Kaikans podem ser entendidos como “associações que tem a finalidade de reunir os descendentes e suas famílias para promover, em conjunto, as atividades sociais,  esportivas e culturais de seu país”.
                    </p>
                </div>
            </section>
               </div>
)

}



export default HomePage