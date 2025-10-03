import { database } from "../../database/database";
import PostCard from "../../components/postcard";
import "./home.css";
import { useSearchParams } from "react-router-dom";

function Home() {
  const [searchParams] = useSearchParams(); 
  const category = searchParams.get("category") || "";

  const filteredPosts = category
    ? database.posts.filter((post) => post.categorie === category)
    : database.posts;

  return (
    <div className="home-container">
      <h1 className="home-title">
        {category ? `Artigos de ${category}` : "Artigos Recentes"}
      </h1>

      <div className="posts-grid">
        {filteredPosts.map((post) => (
          <div key={post.id} className="post-card-wrapper">
            <PostCard
              id={post.id}
              title={post.title}
              content={post.content}
              imageUrl={post.imageUrl}
              categorie={post.categorie}
            />
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div
          style={{
            textAlign: "center",
            color: "#a6a6a7",
            padding: "40px",
            fontStyle: "italic",
          }}
        >
          Nenhum artigo encontrado para a categoria "{category}"
        </div>
      )}
    </div>
  );
}

export default Home;
