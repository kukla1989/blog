import { v4 as uuidv4 } from "uuid";

import ArrowSVG from "../../imgs/ArrowSVG";
import Post from "../Post/Post";
import img1 from "../../imgs/post1.png";
import img2 from "../../imgs/post2.png";
import img3 from "../../imgs/post3.png";
import { PostType } from "../../types";

const posts: PostType[] = [
  {
    img: img1,
    date: "April 24, 2022 - 5 min read",
  },
  {
    img: img2,
    date: "April 24, 2022 - 5 min read",
  },
  {
    img: img3,
    date: "April 24, 2022 - 5 min read",
  },
];

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
        {posts.map((post) => (
          <Post {...post} key={uuidv4()} />
        ))}
      </div>
    </div>
  );
};

export default MainPagePosts;
