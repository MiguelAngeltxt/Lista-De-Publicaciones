import { useState, useEffect } from "react";
import PostCard from "./PostCard";

const POSTS_PER_PAGE = 10;

function PostsList({ query }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        if (!response.ok)
          throw new Error("No se pudieron cargar las publicaciones.");
        const data = await response.json();
        setPosts(data.slice(0, 50));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = filteredPosts.slice(start, start + POSTS_PER_PAGE);

  if (loading) {
    return (
      <p style={{ color: "#818cf8", textAlign: "center", marginTop: "60px" }}>
        Cargando publicaciones...
      </p>
    );
  }

  if (error) {
    return (
      <p style={{ color: "#f87171", textAlign: "center", marginTop: "60px" }}>
        ❌ {error}
      </p>
    );
  }

  return (
    <div>
      <p
        style={{ color: "#475569", fontSize: "0.85rem", marginBottom: "16px" }}
      >
        {filteredPosts.length} resultado{filteredPosts.length !== 1 ? "s" : ""}
        {query && ` para "${query}"`}
      </p>

      {filteredPosts.length === 0 ? (
        <p style={{ color: "#64748b", textAlign: "center", marginTop: "60px" }}>
          No se encontraron publicaciones con ese título.
        </p>
      ) : (
        <>
          <ul style={{ padding: 0 }}>
            {visiblePosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </ul>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginTop: "32px",
              paddingBottom: "40px",
            }}
          >
            <button
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={currentPage === 1}
              style={{
                padding: "8px 20px",
                borderRadius: "8px",
                border: "1px solid #2d3148",
                backgroundColor: currentPage === 1 ? "#1a1d2e" : "#312e81",
                color: currentPage === 1 ? "#475569" : "#c7d2fe",
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
                fontWeight: "600",
                fontSize: "0.9rem",
              }}
            >
              ← Anterior
            </button>

            <span style={{ color: "#64748b", fontSize: "0.9rem" }}>
              Página {currentPage} de {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage === totalPages}
              style={{
                padding: "8px 20px",
                borderRadius: "8px",
                border: "1px solid #2d3148",
                backgroundColor:
                  currentPage === totalPages ? "#1a1d2e" : "#312e81",
                color: currentPage === totalPages ? "#475569" : "#c7d2fe",
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                fontWeight: "600",
                fontSize: "0.9rem",
              }}
            >
              Siguiente →
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default PostsList;
