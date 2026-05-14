import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Calculadora() {
  const [dados, setDados] = useState({
    largura: '',
    comprimento: '',
    profundidade: '',
    precoAgua: '',
    precoEletrico: '',
    precoHidraulico: '',
    precoManutencao: ''
  });

  const [resultado, setResultado] = useState(null);

  const handleChange = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const calcularCusto = async () => {
    try {
      const response = await axios.post('http://localhost:3000/PISCINA/calcular', dados);
      setResultado(response.data);
    } catch (error) {
      console.error("Erro ao calcular:", error);
      alert("Erro ao conectar com a API. Verifique se o servidor Node está rodando!");
    }
  };

  return (
    
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      minHeight: '100vh' 
    }}>
      
      <nav style={{ marginBottom: '20px', width: '100%', textAlign: 'center' }}>
        <Link to="/sobre">Sobre</Link> | <Link to="/help">Ajuda</Link> | <Link to="/login">Sair</Link>
      </nav>

      <h1 style={{ textAlign: 'center' }}>Cálculo de Custo da Piscina</h1>
      
    
      <div style={{ 
        display: 'grid', 
        gap: '10px', 
        width: '100%', 
        maxWidth: '400px', 
        marginTop: '20px'
      }}>
        <input type="number" name="largura" placeholder="Largura (m)" onChange={handleChange} style={styles.input} />
        <input type="number" name="comprimento" placeholder="Comprimento (m)" onChange={handleChange} style={styles.input} />
        <input type="number" name="profundidade" placeholder="Profundidade (m)" onChange={handleChange} style={styles.input} />
        <hr style={{ width: '100%' }} />
        <input type="number" name="precoAgua" placeholder="Preço da Água (m³)" onChange={handleChange} style={styles.input} />
        <input type="number" name="precoEletrico" placeholder="Custo Material Elétrico" onChange={handleChange} style={styles.input} />
        <input type="number" name="precoHidraulico" placeholder="Custo Material Hidráulico" onChange={handleChange} style={styles.input} />
        <input type="number" name="precoManutencao" placeholder="Custo Manutenção (por m³)" onChange={handleChange} style={styles.input} />
        
        <button onClick={calcularCusto} style={styles.button}>
          Calcular Projeto
        </button>
      </div>

      {resultado && (
        <div style={{ 
          marginTop: '30px', 
          padding: '20px', 
          backgroundColor: '#f4f4f4', 
          borderRadius: '8px',
          width: '100%',
          maxWidth: '400px',
          textAlign: 'left' 
        }}>
          <h3>Resultados do Projeto:</h3>
          <p><strong>Volume Total:</strong> {resultado.volume} m³</p>
          <p><strong>Custo da Água:</strong> R$ {resultado.custoAgua}</p>
          <p><strong>Total de Materiais:</strong> R$ {resultado.custoMateriais}</p>
          <p><strong>Manutenção Mensal Estimada:</strong> R$ {resultado.custoManutencao}</p>
          <hr />
          <h4 style={{ color: '#007bff', margin: 0 }}>Custo Total da Obra: R$ {resultado.totalObra}</h4>
        </div>
      )}
    </div>
  );
}

const styles = {
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px'
  },
  button: {
    padding: '12px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold'
  }
};

export default Calculadora;