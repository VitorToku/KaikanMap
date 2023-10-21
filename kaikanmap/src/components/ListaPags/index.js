import styled from 'styled-components'

const pags = ["A EQUIPE","LISTA DE KAIKANS","CALENDÁRIO" ]

const Lista = styled.ul
`
    display: flex;
    list-style: none;
    gap: 1rem;
`

function ListaPags(){
    return(
        <Lista>
        {pags.map ((texto) => (
            <li><a>{texto}</a></li>
        ) )}
        </Lista>
    )
}

export default ListaPags