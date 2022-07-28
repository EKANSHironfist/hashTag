import React ,{useEffect, useState}from 'react'
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from './Post';
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
  const [posts,setPosts]=useState([]);


  // useEffect runs on given condition
      // means run when feed component load and don't run it after
  useEffect(() =>   {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc=>doc.data()))
    ))

    },[]);
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>
          Home
        </h2>
      </div>

      


      {/* TweetBox */}
      <TweetBox/>

       <FlipMove>
      {/* post */}
        {/* to every sing post we go through we hae to render the pos componet */}
      {posts.map(post=> (
      //  pulling are display name,avatar ,image,etc from database
      <Post
      key={post.text}
    displayName  ={post.displayName}                  
      username={post.username}
      verified={post.verified}
      text ={post.text}
      avatar={post.avatar}
      image={post.image}
      />
     ) )}
     </FlipMove>
      
     
      

    </div>
  )
}

export default Feed