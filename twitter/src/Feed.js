import React, { useState, useEffect} from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";

function Feed(){
    const [posts, setPosts] = useState ([]);

    useEffect (() => {
        db.collection('posts').onSnapshot( snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    },[]);

    return(
        <div className="feed">
            {/* Header */}
            <div className="feed_header">
            <h2>Home</h2>
            </div>

            <TweetBox />
            {posts.map (post => (
            <Post displayName={post.displayName} username={post.username} verified={post.verified} text={post.text} avatar={post.avatar} image={post.image} />    
            ))}
            
            {/*
            <Post displayName="Goku" username="mr.exemplary" verified={true} text="Just warmin' up!" avatar="https://cdn.dribbble.com/users/81809/screenshots/3443452/ssg-goku.jpg" image="https://media1.tenor.com/images/b13da3906d4f03e0f1ce818238d188a4/tenor.gif?itemid=14110488" />
            <Post displayName="Goku" username="mr.exemplary" verified={true} text="Just warmin' up!" avatar="https://cdn.dribbble.com/users/81809/screenshots/3443452/ssg-goku.jpg" image="https://media1.tenor.com/images/b13da3906d4f03e0f1ce818238d188a4/tenor.gif?itemid=14110488" />
            <Post displayName="Goku" username="mr.exemplary" verified={true} text="Just warmin' up!" avatar="https://cdn.dribbble.com/users/81809/screenshots/3443452/ssg-goku.jpg" image="https://media1.tenor.com/images/b13da3906d4f03e0f1ce818238d188a4/tenor.gif?itemid=14110488" />
            <Post displayName="Goku" username="mr.exemplary" verified={true} text="Just warmin' up!" avatar="https://cdn.dribbble.com/users/81809/screenshots/3443452/ssg-goku.jpg" image="https://media1.tenor.com/images/b13da3906d4f03e0f1ce818238d188a4/tenor.gif?itemid=14110488" />
            <Post displayName="Goku" username="mr.exemplary" verified={true} text="Just warmin' up!" avatar="https://cdn.dribbble.com/users/81809/screenshots/3443452/ssg-goku.jpg" image="https://media1.tenor.com/images/b13da3906d4f03e0f1ce818238d188a4/tenor.gif?itemid=14110488" />
            <Post displayName="Goku" username="mr.exemplary" verified={true} text="Just warmin' up!" avatar="https://cdn.dribbble.com/users/81809/screenshots/3443452/ssg-goku.jpg" image="https://media1.tenor.com/images/b13da3906d4f03e0f1ce818238d188a4/tenor.gif?itemid=14110488" />
             <Post displayName="Goku" username="mr.exemplary" verified={true} text="Just warmin' up!" avatar="https://cdn.dribbble.com/users/81809/screenshots/3443452/ssg-goku.jpg" image="https://media1.tenor.com/images/b13da3906d4f03e0f1ce818238d188a4/tenor.gif?itemid=14110488" />  */}
        </div>
    )
}

export default Feed