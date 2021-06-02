import React from 'react';
import "./Widgets.css";
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed, TwitterTweetEmbed, TwitterShareButton } from "react-twitter-embed";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets_widgetContainer" >
                <h2> What's happening </h2>
                <TwitterTweetEmbed tweetId={"1391214255773556741"} />
                <TwitterTimelineEmbed sourceType="profile" screenName="dragonballsuper" options={{height:400}} />
            </div>
            
        </div>
    )
}

export default Widgets
