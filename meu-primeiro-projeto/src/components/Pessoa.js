function Pessoa({nome, foto, profissao, idade}){
    return(
        <div>
            <img src={foto} alt={nome} />
            <h2><strong>Nome:</strong> {nome} </h2>
            <p><strong>Idade:</strong> {idade} </p>
            <p><strong>Profissão:</strong> {profissao} </p>

        </div>
    )
}

export default Pessoa;