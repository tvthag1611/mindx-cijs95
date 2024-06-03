import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();

  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);

  const getDetailPost = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await res.json();
      setPost(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetailPost();
  }, []);

  return (
    <div>
      <h1>Post Detail</h1>
      {loading ? (
        <div>Loading...</div>
      ) : Object.keys(post).length ? (
        <Fragment>
          <strong>{post?.title}</strong>
          <p>{post?.body}</p>
        </Fragment>
      ) : (
        <div>Post not found</div>
      )}
    </div>
  );
};

export default PostDetail;
