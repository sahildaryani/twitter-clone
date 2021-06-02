import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({displayName, username, verified, text, image, avatar}) {
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src="https://cdn.dribbble.com/users/81809/screenshots/3443452/ssg-goku.jpg" />
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3> Goku {" "}
                            <span className="post_headerSpecial"><VerifiedUserIcon className="post_badge" /> @mr.exemplary </span>
                        </h3>
                    </div>
                    <div className="post_headerDesc">
                        <p> Just warming up! </p>
                    </div>
                    </div>
                    <img src="https://media1.tenor.com/images/b13da3906d4f03e0f1ce818238d188a4/tenor.gif?itemid=14110488" alt="No image found"/>
                    <div className="post_footer">
                        <ChatBubbleOutlineIcon fontSize="small"/>
                        <RepeatIcon fontSize="small"/>
                        <FavoriteBorderIcon fontSize="small" />
                        <PublishIcon fontSize="small" />
                    </div>
                
            </div>
        </div>
    )
}

export default Post
