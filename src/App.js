import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homescreen from "./Homescreen";
import Login from "./Login";
import EditTweet from "./EditTweet";
import "./styles.css";
import Profile from "./Profile";

function App() {
  const [user, setUser] = useState("");
  const [tweets, setTweets] = useState([]);
  const [elem, setElem] = useState();

  useEffect(() => {
    const getData = async () => {
      const fetchfromserver = await fetchData();
      setTweets(fetchfromserver);
    };
    getData();
  }, []);
  // to fetch the data
  const fetchData = async () => {
    const data = await fetch("https://tweets.free.beeceptor.com/tweets/all");
    if (data.status === 200) {
      const result = await data.json();
      console.log("result from API");
      return result;
    } else {
      const db = await fetch("./data.json");
      const res = await db.json();
      console.log("from db");
      return res;
    }
  };

  // to add the new tweet

  const addTweet = (tweet) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const data = {
      id: id,
      userName: "Jolie",
      tweet: tweet,
      date: "20220310"
    };
    setTweets([data, ...tweets]);
  };

  // to delete the tweet

  const deleteTweet = (id) => {
    setTweets(tweets.filter((elem) => elem.id !== id));
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          {!user ? (
            <Login setUser={setUser} />
          ) : (
            <Route exact path="/">
              <Homescreen
                tweets={tweets}
                addTweet={addTweet}
                deleteTweet={deleteTweet}
                setElem={setElem}
              />
            </Route>
          )}
          <Route path="/edit/:id">
            <EditTweet
              elem={elem}
              setElem={setElem}
              tweets={tweets}
              setTweets={setTweets}
            />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
