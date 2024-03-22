import BotaoCustomizado from '../BotaoCustomizado/BotaoCustomizado';
import ListaProdutos from '../ListaProdutos/ListaProdutos';
import './Principal.css';

const Principal = () => {
  return (
    <main>
      <BotaoCustomizado
        tipo='primario'
        onClick={() => {
          alert('Salvo com sucesso!');
        }}
      >
        Salvar
      </BotaoCustomizado>
      <BotaoCustomizado
        tipo='secundario'
        onClick={()=>{
          alert('Editado com sucesso!')
        }}
      >
        Editar
      </BotaoCustomizado>
      <BotaoCustomizado
        onClick={()=>{
          alert('Cancelado com sucesso!')
        }}
      >
        Cancelar
      </BotaoCustomizado>

      <ListaProdutos />
    </main>
  );
};

export default Principal;
