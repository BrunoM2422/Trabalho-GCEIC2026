import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Calculadora de Piscina</h1>
      <p>Carregando projeto GCEIC2026...</p>
      <div className="spinner"></div> 
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#007bff',
    color: 'white',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    fontSize: '3rem',
    marginBottom: '10px'
  }
};

export default SplashScreen;