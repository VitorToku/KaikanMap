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
        fetchData();
    }, [] );    

    
    
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