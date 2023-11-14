import styled from "styled-components";
import React, {useState, useEffect} from 'react';
import Axios from "axios";

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
    const [listaKaikans, setListaKaikans] = useState();

    useEffect(() =>{
        // Axios.get("http://localhost:3001/listaKaikans").then((response) =>{
        //     setListaKaikans(response.data);
        // })
        const fetchData = async () =>{
            try{
                const response = await Axios.get("http://localhost:3001/listaKaikans")
                .then(function (response) {
                    setListaKaikans(response.data);
                })                
            } catch(error){
                console.error("Erro ao buscar dados:", error);
            }
        };
        console.log(listaKaikans)
        fetchData();
    }, [] );    

    console.log(listaKaikans)
    
    return(        
        <>
            <div>
                <h2>Lista de Kaikans</h2>
                <Externo className="overflow-auto">
                <Lista>
                    {listaKaikans?.map((Item) =>              
                        (<Kaikan>
                            <Interno key={Item.id}>
                            <a  href="# ">{Item.Nomekaikan}</a>                            
                            {Item.DescricaoCompleta}
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