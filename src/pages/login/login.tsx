import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Bem-vindo de volta</h1>
          <p>Faça login para acessar sua conta</p>
        </div>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">E-mail ou nome de usuário</label>
            <input type="text" id="email" name="email" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" />
          </div>

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
