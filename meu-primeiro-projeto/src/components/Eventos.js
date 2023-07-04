import NovoEvento from "./Events/NovoEvento";

function Eventos(){

    function meuEvento(e){
        e.preventDefault()
        console.log('Meu primeiro evento')
    }

    function segundoEvento(e){
        e.preventDefault()
        console.log('Segundo Evento')
    }

    function terceiroEvento(e){
        e.preventDefault()
        console.log('Terceiro Evento')
    }

    function quertoEvento(){
        console.log('Quarto Evento')
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <NovoEvento event={meuEvento} text='Primeiro Evento' />
            <NovoEvento event={segundoEvento} text='Segundo Evento '/>
            <NovoEvento event={terceiroEvento} text='Terceiro Evento' />
            <NovoEvento event={quertoEvento} text='Quarto Evento' />
        </div>
    )
}

export default Eventos;