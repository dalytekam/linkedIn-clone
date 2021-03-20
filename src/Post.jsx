import React from "react";
import "./Post.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendIcon from "@material-ui/icons/Send";
import InputItem from "./InputItem";
const Post = ({ author, description, content, picUrl }) => {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__header__avatar">
          <AccountCircleIcon fontSize="inherit" />
        </div>
        <div className="post__header__authorinfo">
          <h4>{author}</h4>
          <h5>{description}</h5>
        </div>
      </div>
      <div className="post__body">
        <p>{content}</p>
        <img src={picUrl} alt="" />
      </div>
      <div className="post__actions">
        <InputItem Icon={ThumbUpAltOutlinedIcon} color="#898989" title="Like" />
        <InputItem Icon={CommentOutlinedIcon} color="#898989" title="Comment" />
        <InputItem Icon={ShareOutlinedIcon} color="#898989" title="Share" />
        <InputItem Icon={SendIcon} color="#898989" title="Send" />
      </div>
    </div>
  );
};

export default Post;
