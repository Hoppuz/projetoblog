function Home() {
  const posts = [
    {
      title: "Como usar React",
      content: "Aprenda os fundamentos da biblioteca React.js...",
    },
    {
      title: "Mercado de Criptos",
      content: "O que você precisa saber antes de investir...",
    },
    {
      title: "10 hábitos saudáveis",
      content: "Dicas simples para uma vida mais equilibrada...",
    },
    {
      title: "Estudos e produtividade",
      content: "Métodos modernos para manter o foco nos estudos...",
    }
  ];

  return (
    <div style={{
      padding: "40px 0",

    }}>
      <h1 style={{
        textAlign: "left",
        marginBottom: "40px",
        color: "#a6a6a7ff",
        fontSize: "45px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}>
        Artigos Recentes
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "32px",
      }}>
        {posts.map(post => (
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
            <h2 style={{
              fontSize: "24px",
              color: "#f5f5f5",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
            }}>
              {post.title}
            </h2>

            <p style={{
              color: "#cccccc",
              fontSize: "16px",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
            }}>
              {post.content}
            </p>

            <div style={{
              color: "#fff",
              fontSize: "16px",
              fontWeight: "600",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            }}>
              Ler mais –
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;