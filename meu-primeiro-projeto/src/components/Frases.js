import styles from './Frase.module.css'


function Frases(){
    return (
        <div className={styles.fraseContainer} >
            <h2>Lista de Tarefas</h2>
            <ol>
                <li>Acordar</li>
                <li>Arrumar a Cama</li>
                <li>Escovar os Dentes</li>
                <li> Lavar o Rosto</li>
                <li>Tomar Cafe</li>
            </ol>
        </div>

    )
}

export default Frases;