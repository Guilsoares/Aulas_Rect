import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';

function App() {

  return (
    <div className="App">
      <Pessoa nome='Guilherme' idade='27' profissao='desempregado' foto='https://via.placeholder.com/150' />
    </div>
  );
}

export default App;
