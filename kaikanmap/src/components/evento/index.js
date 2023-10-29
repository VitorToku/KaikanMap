import styled from 'styled-components'

const DadosEvento = [{
    nomeEvento: 'Treino Taiko',
    localEvento: 'Embu-Guaçu',
    KaikanResponsavel: 'Kaikan do Cipó',
    dataEvento: "25/08/2024",
    horaEvento: '18:00',
    imgEvento: '../img/vitao.png',
    descricaoEvento: 'Lorem ipsum dolor sit amet. Et esse sunt aut corporis repellendus sit tenetur corporis. Eum error optio ut numquam adipisci eum assumenda officia. Est totam vitae qui modi earum ut velit eligendi in doloremque praesentium eos praesentium asperiores. Lorem ipsum dolor sit amet. Et esse sunt aut corporis repellendus sit tenetur corporis. Eum error optio ut numquam adipisci eum assumenda officia. Est totam vitae qui modi earum ut velit eligendi in doloremque praesentium eos praesentium asperiores.'
}];

const Externo = styled.div`
    margin: 50px;

    @media(max-width: 1024px){
        margin: 40px;
    }

    @media(max-width: 425px){
        margin: 0px;
    }
`
const Data = styled.div`
    margin: 0 auto;
    @media(max-width:1024px){
        margin: 0 50px;
    }
    @media(max-width: 425px){
        margin: 10px;
    }
`
const Descricao = styled.div`       
    margin: 0 200px;
    background-color: #D9D9D9;
    padding: 30px 50px ;

    @media(max-width: 1024px){
        padding: 20px 20px ;
        margin: 0 50px;
    }
    @media(max-width: 425px){
        margin: 10px;
    }
    `
const ImgEvento = styled.img`
    display: flex;
    margin: 40px auto;
    width: 90%;

    @media(max-width: 1024px){
        margin: 20px auto;
    }
    @media(max-width: 425px){
        margin: 10px;
    }
`
function DescEvento(){
    return(
        <Externo>
            <Data>
            <h1>{DadosEvento[0].nomeEvento}</h1>
            <h2>{DadosEvento[0].KaikanResponsavel} - {DadosEvento[0].localEvento}</h2>
            <p>{DadosEvento[0].dataEvento} - {DadosEvento[0].horaEvento} </p>
            </Data>
            <Descricao>
            <ImgEvento src={DadosEvento[0].imgEvento} alt="imgEvento"></ImgEvento> 
            <p>{DadosEvento[0].descricaoEvento}</p>
            </Descricao>
        </Externo>
    )
}

export default DescEvento;