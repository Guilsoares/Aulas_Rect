import Itens from "./Itens";

function List(){
    return (
        <>
        <h1>Minha Lista</h1>
        <ul>
            <li> <Itens marca="Ferrari" lancamento={1984} /> </li>
            <li> <Itens marca="Fiat" lancamento={2005} /> </li>
            <li> <Itens marca="Chevrolet" lancamento={2002} /> </li>
            <li> <Itens/> </li> 
        </ul>
        </>

    )
}

export default List;