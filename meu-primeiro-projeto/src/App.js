import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'Guilherme'
  let data = new Date()
  let ano = data.getFullYear()
  let dia = data.getDate()
  let mes = data.getMonth()
  const month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']


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
      <p>Hoje é {dia}/{month[mes]}/{ano} </p>
      <p>A Subtração : {sum(10,7)} </p>

      <img src={url} alt="Minha Imagem" /> 
      <HelloWorld/>
    </div>
  );
}

export default App;
