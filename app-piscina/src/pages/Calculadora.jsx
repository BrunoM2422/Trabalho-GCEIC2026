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
      // Chama a API que você configurou no Node (ajuste a porta se necessário)
      const response = await axios.post('http://localhost:3000/PISCINA/calcular', dados);
      setResultado(response.data);
    } catch (error) {
      console.error("Erro ao calcular:", error);
      alert("Erro ao conectar com a API. Verifique se o servidor Node está rodando!");
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/sobre">Sobre</Link> | <Link to="/help">Ajuda</Link> | <Link to="/login">Sair</Link>
      </nav>

      <h1>Cálculo de Custo da Piscina</h1>
      
      <div style={{ display: 'grid', gap: '10px', maxWidth: '400px' }}>
        <input type="number" name="largura" placeholder="Largura (m)" onChange={handleChange} />
        <input type="number" name="comprimento" placeholder="Comprimento (m)" onChange={handleChange} />
        <input type="number" name="profundidade" placeholder="Profundidade (m)" onChange={handleChange} />
        <hr />
        <input type="number" name="precoAgua" placeholder="Preço da Água (m³)" onChange={handleChange} />
        <input type="number" name="precoEletrico" placeholder="Custo Material Elétrico" onChange={handleChange} />
        <input type="number" name="precoHidraulico" placeholder="Custo Material Hidráulico" onChange={handleChange} />
        <input type="number" name="precoManutencao" placeholder="Custo Manutenção (por m³)" onChange={handleChange} />
        
        <button onClick={calcularCusto} style={{ padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }}>
          Calcular Projeto
        </button>
      </div>

      {resultado && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f4f4f4', borderRadius: '8px' }}>
          <h3>Resultados do Projeto:</h3>
          <p><strong>Volume Total:</strong> {resultado.volume} m³</p>
          <p><strong>Custo da Água:</strong> R$ {resultado.custoAgua}</p>
          <p><strong>Total de Materiais:</strong> R$ {resultado.custoMateriais}</p>
          <p><strong>Manutenção Mensal Estimada:</strong> R$ {resultado.custoManutencao}</p>
          <h4 style={{ color: '#007bff' }}>Custo Total da Obra: R$ {resultado.totalObra}</h4>
        </div>
      )}
    </div>
  );
}

export default Calculadora;