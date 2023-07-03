import './App.css';
import Pessoa from './components/Pessoa';
import Frases from './components/Frases';
import List from './components/List';

function App() {

  return (
    <div className="App">
      <Pessoa nome='Guilherme' idade='27' profissao='desempregado' foto='https://via.placeholder.com/150' />
      <Frases />
      <List/>

    </div>
  );
}

export default App;
