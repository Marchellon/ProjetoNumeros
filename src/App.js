import React, { useState } from 'react';
import './App.css';

function App() {
  const [numero, setNumero] = useState(null);
  const [cor, setCor] = useState('');

  const consultarNumeroAleatorio = async () => {
    const response = await fetch('http://localhost/index.php');
    const data = await response.json();
    setNumero(data.numero);

    if (0 <= data.numero  && 50 >= data.numero ) {
      setCor('green');
    } else if (51<= data.numero  && 70 >=data.numero ) {
      setCor('yellow');
    } else {
      setCor('red');
    }
  };

  const salvarNumeroEmArquivo = () => {
    if (numero !== null) {
      const blob = new Blob([numero.toString()], { type: 'text/plain;charset=utf-8' });
      const a = document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = 'numero.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gerar Número</h1>
        <div className="button-container">
          <button onClick={consultarNumeroAleatorio}>Consultar Número</button>
          <button onClick={salvarNumeroEmArquivo}>Salvar Número</button>
        </div>
        {numero !== null && (
          <p style={{ color: cor }}>Número gerado: {numero}</p>
        )}
      </header>
     <div>
      
     </div>
    </div>
  );
}

export default App;