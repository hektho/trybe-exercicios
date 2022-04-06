import Header from './Header';
import Conteudo from './Content.jsx';
const Task = (value) => {
  return (
    <li> {value} </li>
  );
}

const compromissos = ['Jogar', 'Comer', 'Limpar o quarto', 'Estudar React'];

function App() {
  return (
    <div>
      <Header />
      <div> 
        {compromissos.map((item) => Task(item))}
      </div>
      <Conteudo />
    </div>
    
    
  );
}

export default App;
