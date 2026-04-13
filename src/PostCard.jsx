function PostCard({ post }) {
  return (
    <li
      style={{
        backgroundColor: "#1e2130",
        border: "1px solid #2d3148",
        borderRadius: "12px",
        padding: "20px 24px",
        marginBottom: "16px",
        listStyle: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
        <span
          style={{
            backgroundColor: "#312e81",
            color: "#818cf8",
            fontSize: "0.75rem",
            fontWeight: "700",
            padding: "3px 10px",
            borderRadius: "999px",
          }}
        >
          #{post.id}
        </span>
      </div>

      <h2
        style={{
          fontSize: "1rem",
          fontWeight: "700",
          color: "#c7d2fe",
          marginBottom: "8px",
          textTransform: "capitalize",
        }}
      >
        {post.title}
      </h2>

      <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: "1.6" }}>
        {post.body}
      </p>
    </li>
  );
}

export default PostCard;
