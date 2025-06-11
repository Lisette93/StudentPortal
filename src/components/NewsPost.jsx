

export default function NewsPost({ title, body }) {
  return (
    <div className="card h-100 content-card">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{body}</p>
      </div>
    </div>
  );
}
