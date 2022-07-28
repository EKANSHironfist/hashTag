import React from "react";
import "./SidebarOption.css";

function SidebarOption({active,text,Icon})     /* text and Icon is prop and passed as an argument inside the function*/
{
return (
   <div className={`sidebarOption ${active && "sidebarOption--active"}`}>     {/* BEM naming convention*/}
       <Icon />
       <h2>{text}</h2>
   </div>
   );

}
export default SidebarOption;