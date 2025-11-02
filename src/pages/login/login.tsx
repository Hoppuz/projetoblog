import "./Login.css";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Login bem-sucedido:", data);
    } catch (err) {
      console.error("Erro no login:", err);
      setError("Falha no login. Por favor, tente novamente.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Bem-vindo de volta</h1>
          <p>Faça login para acessar sua conta</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">E-mail ou nome de usuário</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" name="rememberMe" />
              <span>Lembrar de mim</span>
            </label>

            <button type="button" className="forgot-password">
              Esqueci minha senha
            </button>
          </div>

          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>

        <button type="button" className="register-button">
          Cadastre-se
        </button>
      </div>
    </div>
  );
};

export default Login;
