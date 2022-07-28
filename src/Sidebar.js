import React  from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
function Sidebar()
{
   return (
   
    <div className="sidebar">
        {/* Twitter icon */}
          {/* using twitter icon from material ui */}
          <TwitterIcon className="sidebar__twitterIcon"/>                 {/*way to use the twitter icon */}              
           
           <SidebarOption active Icon={HomeIcon} text="Home"/>      {/* this will let us use SidebarOption.js*/}
           <SidebarOption Icon={SearchIcon} text="Search"/> 
           <SidebarOption Icon={NotificationsIcon} text="Notification"/>        
           <SidebarOption Icon={MailOutlineIcon} text="Mail"/>
           <SidebarOption Icon={BookmarkBorderIcon} text="Bookmark"/>
           <SidebarOption Icon={ListAltIcon} text="List"/>
           <SidebarOption Icon={PersonOutlineIcon} text="Profile"/>
           <SidebarOption Icon={MoreHorizIcon} text="More"/>
           
           {/* button-> Tweet */}
           <Button variant="outlined" className="sidebar__tweet"  fullWidth>Tweet</Button>            {/*variant mean design of that button*/}
    </div>

   )
}

export default Sidebar;