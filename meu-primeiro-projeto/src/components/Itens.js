import PropTypes from 'prop-types';

function Itens({marca, lancamento}){
    return(
        <>
        <li> 
            {marca} - {lancamento}
        </li>
        </>
    )

}

Itens.propTypes = {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number.isRequired,
}

Itens.defaultProps = {
    marca: 'Faltou a marca',
    lancamento: 0
}

export default Itens;