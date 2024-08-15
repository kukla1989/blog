import { v4 as uuidv4 } from "uuid";

import ArrowSVG from "../../imgs/ArrowSVG";
import Post from "../Post/Post";
import posts from '../../_utils/posts-data'


const MainPagePosts = () => {
  return (
    <div className="main-page-posts">
      <div className="main-page-posts__top">
        <div className="main-page-posts__title">
          Latest <span className="aqua-gradient">Posts</span>
        </div>

        <a href="#" className="main-page-posts__view-all">
          View all Posts
          <ArrowSVG />
        </a>
      </div>

      <div className="main-page-posts__posts">
        {posts.slice(0, 3).map((post) => (
          <Post {...post} key={uuidv4()} />
        ))}
      </div>
    </div>
  );
};

export default MainPagePosts;
