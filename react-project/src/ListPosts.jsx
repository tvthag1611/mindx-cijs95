import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getListPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getListPosts();
  }, []);

  return (
    <div>
      <h1>List Posts</h1>
      <ul>
        {loading ? (
          <div>Loading...</div>
        ) : (
          posts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ListPosts;
