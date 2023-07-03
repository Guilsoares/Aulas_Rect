import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'Guilherme'
  let agora = new Date()
  let ano = agora.getFullYear()
  let dia = agora.getDay()
  let mes = agora.getMonth()

  const newName = name.toUpperCase()

  function sum(a, b){
    return a-b
  }

  const url = 'https://via.placeholder.com/150'



  return (
    <div className="App">
      <h1>Alterando o JSX</h1>
      <p>Meu primeiro App</p>
      <h2>Olá, {newName} você tem {sum(ano,1996)} anos</h2>
      <p>Hoje é {dia}/{mes}/{ano} </p>
      <p>A Subtração : {sum(10,7)} </p>

      <img src={url} alt="Minha Imagem" /> 
      <HelloWorld/>
    
    </div>
  );
}

export default App;
