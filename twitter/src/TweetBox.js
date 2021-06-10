import React, {useState} from 'react';
import "./TweetBox.css";
import { Avatar, Button } from '@material-ui/core';
import db from "./firebase";

function TweetBox() {

    const [tweetMsg, setTweetmsg] = useState("");
    const sendTweet = e => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Gokuz",
            username: "mr.exemp",
            verified: true,
            text: tweetMsg,
            image: "",
            avatar: "https://cdn.dribbble.com/users/81809/screenshots/3443452/ssg-goku.jpg" 
        });

        setTweetmsg("");
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar src="https://cdn.dribbble.com/users/81809/screenshots/3443452/ssg-goku.jpg" />
                    <input onChange = { (e) => setTweetmsg(e.target.value) } value={tweetMsg} placeholder="What's happening?" type="text" />
                </div>
                <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton">Tweet</Button>
            </form>

            
        </div>
    )
}

export default TweetBox
