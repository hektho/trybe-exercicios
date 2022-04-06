import './App.css';
const Task = (value) => {
  return (
    <li> {value} </li>
  );
}

const compromissos = ['Estudar', 'Dar comida para os gatos', 'Jogar', 'Limpar o quarto'];
const map = compromissos.map((item) => Task(item));
function App() {
  return (
    map
  );
}

export default App;
 