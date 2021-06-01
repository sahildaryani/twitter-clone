import React from 'react'
import "./TweetBox.css"
import { Avatar, Button } from '@material-ui/core';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar src="https://cdn.dribbble.com/users/81809/screenshots/3443452/ssg-goku.jpg" />
                    <input placeholder="What's happening?" type="text" />
                </div>
                <Button className="tweetBox_tweetButton">Tweet</Button>
            </form>

            
        </div>
    )
}

export default TweetBox
