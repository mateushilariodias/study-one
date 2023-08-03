import './App.css'
import Title from '../components/Title'
import Counter from '../components/Counter'
import PaisagemCaminhada from './images/PaisagemCaminhada.jpg'
import useCountdown from './hooks/useCountdown'

function App() {

  const myDate = "Sep 15, 2023 17:40:00"; // Substitua por sua própria data

  if (isNaN(new Date(myDate))) {
    console.error("Data inválida fornecida para a contagem regressiva!");
    return null; // Interromper a renderização do componente
  }

  const [day, hour, minute, second] = useCountdown(myDate);
  
  return (
    <div className="App" style={{ backgroundImage:`url(${PaisagemCaminhada})`}}>
      <div className='container'>
        <Title title={"Contagem regressiva para o aniversário do Mateus"} />
        <div className='countdown-container'>
            <Counter title="Dias" number={day}/>
            <Counter title="Horas" number={hour}/>
            <Counter title="Minutos" number={minute}/>
            <Counter title="Segundos" number={second}/>
        </div>
      </div>
    </div>
  )
}

export default App