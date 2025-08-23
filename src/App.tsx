import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import { useState } from "react";

function App() {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <BrowserRouter>
      <header
        style={{
          backgroundColor: "#141421",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 24px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          width: "100%",
          boxSizing: "border-box",
          height: "70px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Link to="/"  style={{textDecoration: 'none', color: 'inherit'}}>
            <div style={{ fontWeight: "bold", fontSize: "20px" }}>MeuBlog</div>
          </Link>

          <nav style={{ position: "relative" }}>
            <div
              style={{
                padding: "8px 12px",
                borderRadius: "6px",
                cursor: "pointer",
                position: "relative"
              }}
              onMouseEnter={() => setShowCategories(true)}
              onMouseLeave={() => setTimeout(() => setShowCategories(false), 200)}
            >
              Categorias ▼
              {showCategories && (
                <>
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      right: 0,
                      height: "10px",
                      backgroundColor: "transparent"
                    }}
                    onMouseEnter={() => setShowCategories(true)}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 10px)",
                      left: 0,
                      backgroundColor: "#1e1e2d",
                      borderRadius: "6px",
                      padding: "8px 0",
                      minWidth: "150px",
                      zIndex: 1000,
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
                    }}
                    onMouseEnter={() => setShowCategories(true)}
                    onMouseLeave={() => setShowCategories(false)}
                  >
                    <div style={{ padding: "8px 12px", cursor: "pointer" }}>Tecnologia</div>
                    <div style={{ padding: "8px 12px", cursor: "pointer" }}>Estilo de Vida</div>
                    <div style={{ padding: "8px 12px", cursor: "pointer" }}>Negócios</div>
                    <div style={{ padding: "8px 12px", cursor: "pointer" }}>Educação</div>
                    <div style={{ padding: "8px 12px", cursor: "pointer" }}>Saúde</div>
                    <div style={{ padding: "8px 12px", cursor: "pointer" }}>Entretenimento</div>
                  </div>
                </>
              )}
            </div>
          </nav>
        </div>

        <Link to="/login">
          <button
            style={{
              backgroundColor: "#3b82f6",
              color: "white",
              padding: "8px 16px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </Link>
      </header>

      <main style={{
        padding: "24px",
        maxWidth: "800px",
        margin: "0 auto",
        marginTop: "70px", 
        minHeight: "calc(100vh - 70px)",
        boxSizing: "border-box",
      }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;