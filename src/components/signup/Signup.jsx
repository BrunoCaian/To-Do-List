import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword } from '../../firebase.Config';
import style from './Signup.module.css';

const Signup = ({ onSignupSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Cadastro bem-sucedido: ", userCredential.user);
        setSuccess("Cadastro bem-sucedido!");
        onSignupSuccess();
      })
      .catch((error) => {
        let errorMessage = '';
        switch (error.code) {
          case 'auth/email-already-in-use':
            errorMessage = 'Este email já está registrado. Tente fazer login.';
            break;
          case 'auth/invalid-email':
            errorMessage = 'Email inválido. Por favor, verifique o endereço de email.';
            break;
          case 'auth/weak-password':
            errorMessage = 'A senha é muito fraca. Por favor, escolha uma senha mais forte.';
            break;
          default:
            errorMessage = 'Erro de cadastro: ' + error.message;
        }
        setError(errorMessage);
        console.error("Erro de cadastro: ", error);
      });
  };

  return (
    <div>
      <h2>Cadastro</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSignup}>
        <input className={style.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required autoComplete='username' />
        <input className={style.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required autoComplete="new-password" />
        <button className={style.button} type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Signup;