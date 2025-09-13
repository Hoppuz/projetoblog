import { useNavigate } from "react-router";
import { database } from "../database/database";
import { Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: "40px 0",
      }}
    >
      <h1
        style={{
          textAlign: "left",
          marginBottom: "40px",
          color: "#a6a6a7ff",
          fontSize: "45px",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        Artigos Recentes
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "32px",
        }}
      >
        {database.posts.map((post) => {
          const id = post.id;
          const textoCortado = post.content.slice(0, 60) + " ...";
          return (
            <div
              style={{
                backgroundColor: "#26263a",
                borderRadius: "16px",
                padding: "32px",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                border: "1px solid #e2e8f0",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
            >
              <img
                src={post.imageUrl}
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h2
                style={{
                  fontSize: "24px",
                  color: "#f5f5f5",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                }}
              >
                {post.title}
              </h2>

              <p
                style={{
                  color: "#cccccc",
                  fontSize: "16px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                }}
              >
                {textoCortado}
              </p>

              <div
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "600",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                }}
              >
                <Link to={`/posts/${id}`}> Ler mais –</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
