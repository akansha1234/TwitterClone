import React from "react";
import { useHistory } from "react-router-dom";
import "./EditTweet.css";
const EditTweet = ({ elem, setElem, tweets, setTweets }) => {
  const history = useHistory();
  const handleEdit = async (e) => {
    e.preventDefault();
    setTweets(tweets.map((tweet) => (tweet.id === elem.id ? elem : tweet)));
    history.push("/");
  };

  return (
    <div className="edit-screen">
      <h3> Edit your tweet</h3>
      <form className="edit-tweet-form">
        <input
          type="text"
          onChange={(e) => setElem({ ...elem, tweet: e.target.value })}
          value={elem.tweet}
          className="edit-tweet-input"
        />
      </form>
      <button type="submit" className="add-tweet-btn" onClick={handleEdit}>
        Edit Tweet
      </button>
    </div>
  );
};
export default EditTweet;
