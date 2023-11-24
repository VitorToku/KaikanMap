import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../Equipe/vitorr.css'
import diamante from '../../img/diamante.png'
import objetivo from '../../img/objetivo.png'
import fecapimg from '../../img/fecap.png'
import vitor from '../../img/vitor.jpg'
import gabriel from '../../img/gabriel.jpg'
import jasmani from '../../img/jasmani.jpg'

function Equipe() {
    return (

        <div className="containn">
            <section id="s1"></section>
            <main >
                <h1 id="tit">EQUIPE</h1>
                <hr id="hrzao" />
                <h2 id="call">Somos uma equipe comprometida <br /> e interessada</h2>
                <h3 id="fala">Nossa gestão de pessoas segue à risca o princípio de primor pelo ser humano e, por <br /> isso, trabalhamos com liberdade e responsabilidade, focando no desenvolvimento de <br /> cada colaborador.</h3>
            </main>
            <section id="s2">
                <section id="c1" className="caixas">
                    <div class="img">
                        <img class="vit" src={vitor} />
                    </div>
                    <section id="separarhr">  <hr class="superhr" /> </section>

                    <div class="nomee"> <h1 class="nomepro"> Vitor Hideki Tokunaga, 23 anos </h1> </div>
                </section>
                <section id="c2" className="caixas">
                    <div class="img" >
                        <img class="gab" src={gabriel} />
                    </div>
                    <section id="separarhr">  <hr class="superhr" /> </section>
                    <div class="nomee"> <h1 class="nomepro"> Gabriel Coutinho Cezar, 19 anos </h1> </div>
                </section>
                <section id="c3" className="caixas">
                    <div class="img" >

                        <img class="jam" src={jasmani} />
                    </div>
                    <section id="separarhr">  <hr class="superhr" /> </section>
                    <div class="nomee"> <h1 class="nomepro jamalnome"> Jasmani Rudy Arcaya Susano, 22 anos </h1> </div>
                </section>
            </section>
            <section id="s3">
                <section id="imgg">
                    <img id="fecap" src={fecapimg} />
                </section>

                <section id="obj">
                    <h2 id="objText">OBJETIVOS E VALORES</h2>
                    <hr id="sep" />
                    <section id="grid">

                        <section id="objetivo">
                            <img class="icons" src={objetivo} />
                            <h3 id="ob">OBJETIVO:</h3>

                        </section>
                        <section id="preserv">
                            <h4 id="obText">PRESERVAR A CULTURA JAPONESA </h4>
                        </section>


                        <section id="valor">
                            <img class="icons diaman" src={diamante} />
                            <ul>
                                <li id="destaq">VALORES:</li>
                                <li id="font">DIVULGAÇÃO</li>
                                <li id="font">RESPONSABILIDADE</li>
                                <li id="font">TRANSPARÊNCIA</li>
                            </ul>

                        </section>


                    </section>

                </section>







            </section>

        </div>

    )
}

export default Equipe