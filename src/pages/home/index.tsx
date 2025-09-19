import { database } from "../../database/database";
import PostCard from "../../components/postcard";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Artigos Recentes</h1>

      <div className="posts-grid">
        {database.posts.map((post) => (
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
    </div>
  );
}

export default Home;
