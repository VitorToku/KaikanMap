import styled from "styled-components";

const Lista = styled.ul`

    display: flex;
    flex-direction: column;
    gap: 15px;
    list-style: none;
    padding: 0;
    
`
const Kaikan = styled.li`

`

const Externo = styled.div`
    background: rgb(0,55,133);
    background: linear-gradient(180deg, rgba(0,55,133,1) 17%, rgba(0,212,255,1) 100%);
    max-width: 1000px;
    max-height: 600px;
    margin: 25px auto;
    padding: 20px;    
    border: solid black 5px;

`
const Interno = styled.div`
    min-height: 50px;
    background-color: #DCE6EA;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;

`
const Kaikans =[{
    nome: 'Kaikan do Cipó',
    Descricao: "aksdioasjdioasdioahsduhas"
}, {
    nome: 'Kaikan de Casa Grande',
    Descricao: "adkansdansdajsdaçfkpdogjajmfa"
}, {
    nome: 'Kaikan João Branco',
    Descricao: "aksdioasjdioasdioahsduhas"
}, {
    nome: 'Kaikan de Santo Amaro',
    Descricao: "adkansdansdajsdaçfkpdogjajmfa"
}, {
    nome: 'ACAL',
    Descricao: "aksdioasjdioasdioahsduhas"
}, {
    nome: 'Kaikan de Sorocaba',
    Descricao: "adkansdansdajsdaçfkpdogjajmfa"
}, {
    nome: 'Kaikan de Sorocaba',
    Descricao: "adkansdansdajsdaçfkpdogjajmfa"
}, {
    nome: 'Kaikan de Sorocaba',
    Descricao: "adkansdansdajsdaçfkpdogjajmfa"
}, {
    nome: 'Kaikan de Sorocaba',
    Descricao: "adkansdansdajsdaçfkpdogjajmfa"
}, {
    nome: 'Kaikan de Sorocaba',
    Descricao: "adkansdansdajsdaçfkpdogjajmfa"
}];

function ListaDeKaikans(){
    return(
        <>
            <div>
                <h2>Lista de Kaikans</h2>
                <Externo className="overflow-auto">
                <Lista>
                    {Kaikans.map((Item) =>                    
                        (<Kaikan>
                            <Interno>
                            <a href="# ">{Item.nome}</a>                            
                            {Item.Descricao}
                            </Interno>
                        </Kaikan>)
                    )}
                </Lista>
                </Externo>
            </div>
        </>
    )
}

export default ListaDeKaikans;