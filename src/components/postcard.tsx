import { Link } from "react-router-dom";
import "./PostCard.css";

interface PostCardProps {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  categorie: string;
}

function PostCard({ id, title, content, imageUrl, categorie }: PostCardProps) {
  const textoCortado = content.slice(0, 60) + " ...";

  return (
    <div className="post-card">
      <img src={imageUrl} alt={title} className="post-image" />
      <span className="post-category">{categorie}</span>
      <h2 className="post-title">{title}</h2>
      <p className="post-excerpt">{textoCortado}</p>
      <div className="read-more">
        <Link to={`/posts/${id}`} className="read-more-link">
          Ler mais →
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
