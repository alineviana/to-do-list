import { useState } from 'react';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]); // lista de tarefas
  const [filtro, setFiltro] = useState('todas'); // controlar o filtro
  const [novaTarefa, setNovaTarefa] = useState(''); // armazena uma nova tarefa na lista

  const adicionarNovaTarefa = () => {
    if (novaTarefa) {
      setTarefas([...tarefas, { nome: novaTarefa, concluidas: false }]);
      setNovaTarefa(''); // limpa o campo de entrada de texto
    }
  }

  const toggleConcluidas = index => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].concluidas = !novasTarefas[index].concluidas;
    setTarefas(novasTarefas); //atualiza a lista
  }

  const tarefasFiltradas = tarefas.filter(tarefa => {
    if (filtro === 'concluidas') return tarefa.concluidas;
    if (filtro === 'pendentes') return !tarefa.concluidas;
    return true;
  })

  return (
    <>
      <h1>To Do List</h1>

      <div className='data'>
        <input value={novaTarefa} onChange={e => setNovaTarefa(e.target.value)} />
        <button onClick={adicionarNovaTarefa}>Adicionar tarefa</button>
      </div>

      <div className='buttons'>
        <button onClick={() => setFiltro('todas')}>Todas</button>
        <button onClick={() => setFiltro('concluidas')}>Concluídas</button>
        <button onClick={() => setFiltro('pendentes')}>Pendentes</button>
      </div>

      <div className='tarefas'>
        <ul>
          {tarefasFiltradas.map((tarefa, index) => (
            <li key={index}>
              <input type="checkbox" checked={tarefa.concluidas} onChange={() => toggleConcluidas(index)} />
              {tarefa.nome}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App;
