import { Link } from 'react-router-dom';

function Sobre() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <Link to="/calculadora" style={{ textDecoration: 'none', color: '#007bff' }}>
        ← Voltar para Calculadora
      </Link>
      
      <h1>Sobre a Equipe</h1>
      <p>Projeto Integrador 3 - Grupo 17</p>

      <div style={{ marginTop: '20px', border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
        <img 
          src="https://via.placeholder.com/300x200?text=Foto+da+Equipe" 
          alt="Foto da Equipe" 
          style={{ borderRadius: '10px', marginBottom: '20px', display: 'block' }}
        />

        <h3>Integrantes da Equipe:</h3>
        <ul style={{ lineHeight: '1.6' }}>
          <li><strong>Bruno Lenitta Machado</strong> - Desenvolvedor</li>
          <li><strong>Nicolas Mitjans Nunes</strong> - Desenvolvedor</li>
          <li><strong>Gabriel Scolfaro de Azeredo</strong> - Desenvolvedor</li>
        </ul>

        <h4>Tema Escolhido:</h4>
        <p>Cálculo de custo de construção de uma piscina: Volume, material elétrico/hidráulico, custo da água e manutenção mensal.</p>
      </div>
    </div>
  );
}

export default Sobre;