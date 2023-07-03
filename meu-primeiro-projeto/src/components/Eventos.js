function Eventos(){

    function meuEvento(){
        window.alert('Fui Ativado')
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}  >Ativar</button>
        </div>
    )
}

export default Eventos;