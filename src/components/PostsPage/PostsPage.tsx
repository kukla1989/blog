import posts from "../../_utils/posts-data";
import Post from "../Post/Post";
import { v4 as uuidv4 } from "uuid";
import Subscribe from "../Subscribe/Subscribe";
const PostsPage = () => {
  return (
    <div className="posts-page">
      <h1 className="posts-page__title">Posts Examples</h1>

      <p className="posts-page__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum.
      </p>

      <div className="posts-page__posts">
        {posts.map((post) => (
          <Post key={uuidv4()} {...post} />
        ))}
      </div>

      <Subscribe />
    </div>
  );
};

export default PostsPage;
