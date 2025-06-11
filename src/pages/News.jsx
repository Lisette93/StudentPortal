import { useState, useEffect } from "react";
import NewsPost from "../components/NewsPost";
import "../scss/News.scss";

export default function News() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="page-wrapper">
      <div className="container mt-5 pt-5">
        <h2 className="mb-4 text-center">Latest posts</h2>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="row">
          {posts.slice(0, 10).map((post) => (
            <div key={post.id} className="col-md-6 mb-4">
              <NewsPost title={post.title} body={post.body} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


