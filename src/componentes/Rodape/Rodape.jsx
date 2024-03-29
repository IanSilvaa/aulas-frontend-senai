import './Rodape.css';

const Rodape = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer>
      <span className='texto-copyright'>
        Copyright © {anoAtual} - Todos os direitos reservados - Ian Ferreira.
      </span>
    </footer>
  );
};

export default Rodape;
