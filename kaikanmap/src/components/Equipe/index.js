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
                    <img className='Perfil' src={vitor} />
                    <div class="text">Vitor Tokunaga, 23</div>


                    <div id="social-media">
                        <a className="linkIcon" target="_blank" href="https://github.com/VitorToku"><i class="bi bi-github icon" /></a>
                        <a className="linkIcon" target="_blank" href="https://www.instagram.com/vhtoku/"><i class="bi bi-instagram icon"></i></a>
                        <a className="linkIcon" target="_blank" href="https://www.linkedin.com/in/vitor-tokunaga-82b344278/"><i class="bi bi-linkedin icon"></i></a>
                    </div>

                </section>
                <section id="c2" className="caixas">
                    <img className='Perfil' src={gabriel} />
                    <div class="text">Gabriel Coutinho, 18 </div>



                    <div id="social-media">
                        <a className="linkIcon" target="_blank" href="https://github.com/coutinhogit"><i class="bi bi-github icon" /></a>
                        <a className="linkIcon" target="_blank" href="#"><i class="bi bi-instagram icon"></i></a>
                        <a className="linkIcon" target="_blank" href="https://www.linkedin.com/in/gabriel-coutinho-cezar-b2b8821b7/"><i class="bi bi-linkedin icon"></i></a>

                    </div>

                </section>
                <section id="c3" className="caixas">
                    <img className='Perfil' src={jasmani} />
                    <div class="text">Jasmani Rudy, 21 </div>

                    <div id="social-media">
                        <a className="linkIcon" target="_blank" href="https://github.com/110320011"><i class="bi bi-github icon" /></a>
                        <a className="linkIcon" target="_blank" href="#"><i class="bi bi-instagram icon"></i></a>
                        <a className="linkIcon" target="_blank" href="#"><i class="bi bi-linkedin icon"></i></a>

                    </div>



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