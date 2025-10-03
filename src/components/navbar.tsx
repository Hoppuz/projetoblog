import { Link, useNavigate } from "react-router-dom";
import { database } from "../database/database";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const category = event.target.value;
    setSelectedCategory(category);

    if (category) {
      navigate(`/?category=${encodeURIComponent(category)}`);
    } else {
      navigate("/");
    }
  };

  return (
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
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div style={{ fontWeight: "bold", fontSize: "20px" }}>MeuBlog</div>
        </Link>

        <nav style={{ position: "relative" }}>
          <div
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="category-select"
            >
              <option value="">Todas as Categorias</option>
              {database.categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
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
  );
}
