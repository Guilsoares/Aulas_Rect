import {useState} from 'react'

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`Cadastro concluído com sucesso: ${name} e senha ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()


    return(
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>

                    <label 
                        htmlFor='name'>Nome: 
                    </label>

                    <input 
                        type='text'
                        id='name' 
                        name='name' 
                        placeholder='Digite seu Nome'
                        onChange={(e) => setName(e.target.value)}
                    />

                </div>
                <div>

                    <label 
                        htmlFor='senha' > Senha: 
                    </label>

                    <input 
                    type='password' 
                    name='senha' 
                    id='senha' 
                    placeholder='Digite sua senha' 
                    onChange={(e) => setPassword(e.target.value)}
                    />

                </div>
                <div>

                    <input 
                    type='submit' 
                    value='Cadastrar' 
                    />

                </div>
            </form>
        </div>
    )
}

export default Form;