import React from 'react';
const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];
class Content extends React.Content {
    
    render() {
        return (
          <div>
            <div>
              {conteudos.map((item) => (
                <div key={item.conteudo}>
                  <h4>{`O conteúdo é ${item.conteudo}`}</h4>
                  <p>{`Bloco: ${item.bloco}`}</p>
                  <p>{`Status: ${item.status}`}</p>
                </div>
              ))}
            </div>
          </div>
        );
    }
}

export default Content;