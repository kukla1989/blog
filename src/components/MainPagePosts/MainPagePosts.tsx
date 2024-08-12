import ArrowSVG from "../../imgs/ArrowSVG";

const MainPagePosts = () => {
  return (
    <div className="post">
      <div className="post__top">
        <div className="post__title">
          Latest <span className="aqua-gradient">Posts</span>
        </div>

        <a href="#" className="post__view-all">
          View all Posts
          <ArrowSVG />
        </a>
      </div>
    </div>
  );
};

export default MainPagePosts;
