import './App.css';
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import LadoEsquerdo from './componentes/LadoEsquerdo/LadoEsquerdo';
import Principal from './componentes/Principal/Principal';
import Rodape from './componentes/Rodape/Rodape';

function App() {
  console.log('App render...');

  return (
    <>
      <Cabecalho />
      <LadoEsquerdo />
      <Principal />
      <Rodape />
    </>
  );
}

export default App;
