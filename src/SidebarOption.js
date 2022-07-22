import React from "react";
import "./SidebarOption.css";

function SidebarOption({text,Icon})     /* text and Icon is prop and passed as an argument inside the function*/
{
return (
   <div className="sidebarOption">     {/* BEM naming convention*/}
       <Icon />
       <h2>{text}</h2>
   </div>
   )

};
export default SidebarOption