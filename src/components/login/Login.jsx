import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword } from '../../firebase.Config';
import style from './Login.module.css';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Login bem-sucedido: ", userCredential.user);
        setSuccess("Login bem-sucedido!");
        onLoginSuccess();
      })
      .catch((error) => {
        let errorMessage = '';
        switch (error.code) {
          case 'auth/invalid-email':
            errorMessage = 'Email inválido. Por favor, verifique o endereço de email.';
            break;
          case 'auth/user-disabled':
            errorMessage = 'Este usuário foi desativado.';
            break;
          case 'auth/user-not-found':
            errorMessage = 'Usuário não encontrado. Verifique o email ou cadastre-se.';
            break;
          case 'auth/wrong-password':
            errorMessage = 'Senha incorreta. Por favor, tente novamente.';
            break;
          case 'auth/invalid-credential':
            errorMessage = 'Credenciais inválidas. Por favor, verifique os dados inseridos.';
            break;
          default:
            errorMessage = 'Erro de login: ' + error.message;
        }
        setError(errorMessage);
        console.error("Erro de login: ", error);
      });
  };

  return (
    <div className={style.container}>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form className={style} onSubmit={handleLogin}>
        <input className={style.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required autoComplete='username'/>
        <input className={style.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required autoComplete="current-password" />
        <button className={style.button} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
