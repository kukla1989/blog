import React from "react";
import { PostType } from "../../_utils/types";

const Post: React.FC<PostType> = ({ img, date }: PostType) => {
  return (
    <div className="post">
      <img src={img} alt="" className="post__img" />
      <div className="post__title">Lorem ipsum dolor</div>
      <div className="post__date">{date}</div>
      <div className="post__info">
        Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui
        odio id enim.
      </div>
    </div>
  );
};

export default Post;
