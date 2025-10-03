import { useParams, Link } from "react-router";
import { database } from "../../database/database";
import "./Post.css";

export default function Post() {
  const { id } = useParams();

  if (!id) {
    return (
      <div className="error">
        <h2>Post não encontrado</h2>
        <p>O ID do post não foi especificado.</p>
        <Link to="/" className="back-button">
          Voltar para a home
        </Link>
      </div>
    );
  }

  const post = database.posts.find((post) => post.id === id);

  if (!post) {
    return (
      <div className="error">
        <h2>Post não encontrado</h2>
        <p>Não foi possível encontrar o post com ID: {id}</p>
        <Link to="/" className="back-button">
          Voltar para a home
        </Link>
      </div>
    );
  }

  return (
    <div className="post-container">
      <img src={post.imageUrl} alt={post.title} className="post-image" />

      <span className="post-category">{post.categorie}</span>

      <h1 className="post-title">{post.title}</h1>

      <div className="post-content">
        {post.content.split("\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="post-footer">
        <Link to="/" className="back-button">
          Voltar para artigos
        </Link>
      </div>
    </div>
  );
}
