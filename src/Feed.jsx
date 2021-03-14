import React from "react";
import "./Feed.css";
import InputItem from "./InputItem";
import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Post from "./Post";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feed-container">
        <div className="feed-top">
          <form>
            <input type="text" />
            <button type="submit">Post</button>
          </form>
        </div>
        <div className="feed-bottom">
          <InputItem Icon={ImageIcon} color="#70b5f9" title="Photo" />
          <InputItem Icon={YouTubeIcon} color="#7fc15e" title="Video" />
          <InputItem Icon={CalendarTodayIcon} color="#e7a33e" title="Event" />
          <InputItem
            Icon={AssignmentIcon}
            color="#f5987e"
            title="Write article"
          />
        </div>
      </div>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
