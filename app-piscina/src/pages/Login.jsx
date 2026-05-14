import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user === 'admin' && pass === '1234') {
      navigate('/calculadora');
    } else {
      alert('Usuário ou senha incorretos!');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Login - Projeto Piscina</h2>
      <input type="text" placeholder="Usuário" onChange={(e) => setUser(e.target.value)} />
      <br /><br />
      <input type="password" placeholder="Senha" onChange={(e) => setPass(e.target.value)} />
      <br /><br />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default Login;