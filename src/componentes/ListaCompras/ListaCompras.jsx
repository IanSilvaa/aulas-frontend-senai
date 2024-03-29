import React from 'react';
import './ListaCompras.css'

const ListaCompras = () => {
    const [listaCompras, setListaCompras] = React.useState([])
    const [descricao, setDescricao] = React.useState('')

    const adicionarNaLista = () => {
        if (descricao) {
            listaCompras.push(descricao);
            setListaCompras([...listaCompras]);
            setDescricao('');
        } else {
            alert('Escreva algo para adicionar!')
        }
    };

    const removerDaLista = (index) => {
        listaCompras.splice(index, 1);
        setListaCompras([...listaCompras]);
    }

    return (
        <div>
            <h1>Lista de Compras</h1>
            <br />

            <input type="text" placeholder='Descrição' value={descricao} onChange={

                (e) => setDescricao(e.target.value)

            } />
            <button onClick={adicionarNaLista}>Adicionar</button>
            <br />

            <ul>
                {listaCompras.map((item, index) => {
                    return <li key={index}>
                        {item}
                        <button onClick={() => removerDaLista(index)}>Remover</button>
                    </li>;
                })}
            </ul>
        </div>
    );

};

export default ListaCompras;