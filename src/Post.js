
import React, { forwardRef } from 'react'
import  "./Post.css";

import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';


const Post= forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar} , ref)  => {
  return (
    <div className="post" ref={ref}>
        {/*Avatar  */}
        <div className="post__avatar">
            {/* <Avatar src="https://www.freepnglogos.com/"/> */}         {/*this line is hard coded ,nad used before database is connected */}
            <Avatar src={avatar}/>        {/*we are using the prop called avatar ,ad no longer using hard coded line*/}     
        </div>
        
        {/* post body */}
        <div className="post__body">
         <div className="post__header">
           <div className="post__headerText">
             <h3>
              {/* Ekansh Khanulia {""}                             to show name of the Tweeter  (hard coded ,before database is in use)  */}
              {displayName} {""}                 {/*after database is in use*/}
              <span className="post__headerSpecial">
               {verified &&<VerifiedIcon className="post__badge"/>}          {/*  if you are verirfied to show verirfied badge */}
              {/* @ironfist */}                 {/*before database is in use*/ }
                @{username}             {/*when database is in use */}
              </span>
              
             </h3>
          </div>
          <div className="post__headerDescription">
            <p>
              {text}                 {/*after database*/}
              {/* i challenge you to build twitter clone */}
            </p>
          </div>
         </div>
         <img src={image} alt="error!!!!!"/>
        
          <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small"/>
          <RepeatIcon fontSize="small"/>
          <FavoriteBorderIcon fontSize="small"/>
          <PublishIcon fontSize="small"/>

          </div>
        
        </div>

    </div>

  )
});

export default Post