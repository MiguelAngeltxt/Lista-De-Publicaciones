function SearchBar({ query, setQuery }) {
  return (
    <div style={{ marginBottom: "28px" }}>
      <input
        type="text"
        placeholder="Buscar por título..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "12px 16px",
          backgroundColor: "#1e2130",
          border: "1px solid #2d3148",
          borderRadius: "10px",
          color: "#e2e8f0",
          fontSize: "1rem",
          outline: "none",
        }}
      />
    </div>
  );
}

export default SearchBar;
