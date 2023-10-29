import ImgCalendario from '../../img/Calendar.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Eventos =[{
    nome: 'Treino de Taiko',
    Data: '11/10/2024',
    local: 'Embu-Guaçu'
}, {
    nome: 'Bingo',
    Data: '15/08/2024',
    local: 'Registro'
}, {
    nome: 'Tarde de Gincanas',
    Data: '01/04/2024',
    local: 'Ubiratã'
},{
    nome: 'Yakissoba Beneficente',
    Data: '01/04/2024',
    local: 'Santo Amaro'
}
];

const Evento = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #DCE6EA;
    border-radius: 8px;
    align-items: center;
`

const ListaEventos = styled.ul`    
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding:0;
`
const CalendCima = styled.div`
    
`
const FundoLista = styled.ul`    
    background: linear-gradient(180deg, rgba(0,55,133,1) 17%, rgba(0,212,255,1) 100%);
    padding: 25px;
    margin: 10px 200px;
    max-height: 600px;
    @media(max-width:768px){
        margin: 10px 50px;
    }
    @media(max-width:425px){
        margin: 10px 10px;
    }


`
const Filtro = styled.button`
    display: flex;
    margin-left: auto;
    margin-right: 200px;
    @media(max-width:768px){
        margin-right: 50px;
    }
    @media(max-width:425px){
        margin-right: 10px;
    }
`
const Imagem = styled.img`
    display: flex;
    width: 50%;
    margin: 0 auto;

    @media(max-width:768px){
        display:none;
    }
`
const ElemEvento = styled.p`
    width: 30%;
    text-align: center;
    margin: 10px;
`
const Externo = styled.div`
    margin: 20px;
`

function Calendario() {
    return (
        <Externo>  
            <CalendCima>
                <h1>Calendario de Eventos</h1>        
                <Imagem src={ImgCalendario} />
            </CalendCima>
            <Filtro>Filtros</Filtro>
            <FundoLista className='overflow-auto'>                
                <div>
                    <ListaEventos>
                        {Eventos.map((evento)=>
                        (<li>
                            <Link to='/evento'>
                            <Evento>
                                <ElemEvento>{evento.Data}</ElemEvento>
                                <ElemEvento>{evento.nome}</ElemEvento>
                                <ElemEvento>{evento.local}</ElemEvento>
                            </Evento>
                            </Link>
                        </li>)
                        )}
                    </ListaEventos>
                </div>
            </FundoLista>
        </Externo>
    )
}

export default Calendario;