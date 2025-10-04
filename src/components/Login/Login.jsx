import React from "react";
import {FaUser, FaLock} from "react-icons/fa"

import { useState } from "react";

import "./Login.css";


const Login = () => {

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        

        alert(`E-mail: ${username} e senha: ${password} enviados para o servidor`)
    };




  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Faça login</h1>
        <div className="input-field">
          <input type="email" placeholder="Digite seu e-mail" onChange={(e) => setUsername(e.target.value)}/>
          <FaUser className="icon"/>
        </div>
        <div className="input-field">
          <input type="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)} />
          <FaLock className="icon"/>
        </div>

        <div className="recall-forget">
            <label>
                <input type="checkbox" />
                Lembrar de mim
            </label>
            <a href="#">Esqueci minha senha</a>
        </div>

        <button>Entrar</button>

        <div className="signup-link">
            <p>Não possui conta? <a href="#">Clique aqui</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
