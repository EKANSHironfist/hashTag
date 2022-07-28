import React, {useState} from 'react'
import "./TweetBox.css";
import {Avatar,Button} from "@mui/material";
import db from './firebase';


function TweetBox() {

  const[tweetMessage,setTweetMessage]=useState("");      //here useState is set to black initially
  const[tweetImage,setTweetImage]=useState(""); 
  // "e" here means an event
  const sendTweet =e => {
    e.preventDefault();           //this will stop the refresh
    db.collection('posts').add({
       displayName:'Ekansh Khanulia',
       username:"H snake",
       verified:true,
       text:tweetMessage,       //these are our input feilds
       image: tweetImage,
       avatar:"https://i.pinimg.com/736x/94/6f/07/946f078781dbbce9b4ec88f7f6092b17.jpg"

    });
  }
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
            <Avatar src="https://i.pinimg.com/736x/94/6f/07/946f078781dbbce9b4ec88f7f6092b17.jpg"/>
            <input 
            onChange={e =>setTweetMessage(e.target.value) }         //fire off the event every time we type 
            value={tweetMessage}
             placeholder="What's happening"></input>
            


        </div>
        <input  
        onChange={e =>setTweetImage(e.target.value) }
        value={tweetImage}
        className="tweetBox__imageInput" placeholder="Optional : Enter image URL"></input> 
        <Button  onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox