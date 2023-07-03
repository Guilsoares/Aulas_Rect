function Eventos(){

    function meuEvento(e){
        e.preventDefault()
        console.log('Enviado!')
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}  >Ativar</button>
        </div>
    )
}

export default Eventos;