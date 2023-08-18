import React, { useState } from 'react';
import './App.css';

function App() {
  const [numero, setNumero] = useState(null);
  const [cor, setCor] = useState('');

  const consultarNumeroAleatorio = async () => {
    try {
      const response = await fetch('http://localhost/index.php');
      const data = await response.json();

      setNumero(data.numero);

      if (0 <= data.numero && data.numero <= 50) {
        setCor('green');
      } else if (51 <= data.numero && data.numero <= 70) {
        setCor('yellow');
      } else {
        setCor('red');
      }
    } catch (error) {
      console.error('Erro ao consultar número:', error);
    }
  };

  const salvarNumeroEmArquivo = async () => {
    if (numero !== null) {
      const numeroString = numero.toString();

      try {
        const response = await fetch('http://localhost/salvarNumero.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ numero: numeroString }),
        });

        const result = await response.json();
        console.log(result.message);
      } catch (error) {
        console.error('Erro ao salvar número:', error);
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gerar Número</h1>
        <div className="button-container">
          <button onClick={consultarNumeroAleatorio}>Novo Número</button>
          <button onClick={salvarNumeroEmArquivo}>Salvar Número</button>
        </div>
        {numero !== null && (
          <p style={{ color: cor }}>Número gerado: {numero}</p>
        )}
      </header>
    </div>
  );
}

export default App;