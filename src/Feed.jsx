import React, { useState, useEffect } from "react";
import "./Feed.css";
import InputItem from "./InputItem";
import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Post from "./Post";
import firebase from "firebase";
import { db } from "./firebaseConfig";
const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [input, setinput] = useState("");
  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot(snapshot =>
        setPosts(
          snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          }))
        )
      );
  }, []);
  const addNewPost = e => {
    e.preventDefault();
    db.collection("posts").add({
      author: "Daly",
      description: "software Developer",
      content: input,
      picUrl: "",
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setinput("");
  };
  return (
    <div className="feed">
      <div className="feed-container">
        <div className="feed-top">
          <form>
            <input
              type="text"
              value={input}
              onChange={e => setinput(e.target.value)}
            />
            <button type="submit" onClick={addNewPost}>
              Post
            </button>
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
      {posts.map(({ id, data: { author, description, content, picUrl } }) => (
        <Post
          key={id}
          author={author}
          description={description}
          content={content}
          picUrl={picUrl}
        />
      ))}
    </div>
  );
};

export default Feed;
