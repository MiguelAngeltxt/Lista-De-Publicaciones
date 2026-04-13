import { useState } from "react";
import PostsList from "./PostsList";
import SearchBar from "./SearchBar";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <header style={{ marginBottom: "32px" }}>
        <p
          style={{
            color: "#818cf8",
            fontWeight: "600",
            marginBottom: "4px",
            fontSize: "0.85rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          JSONPlaceholder API
        </p>
        <h1 style={{ fontSize: "2rem", fontWeight: "800", color: "#f1f5f9" }}>
          Publicaciones
        </h1>
      </header>

      <SearchBar query={query} setQuery={setQuery} />
      <PostsList query={query} />
    </div>
  );
}

export default App;
