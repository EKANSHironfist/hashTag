import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";    //importing Feed.js
import "./App.css";
import Widgets from "./Widgets" ;

function App() {
  return (
    //BEM convention
    <div className="app">
    

     {/* sidebar of twitter(on the left side of screen) */}
     <Sidebar/>

     {/* feed  (in the middle, and only scrollable part of the twitter window)*/}
      <Feed/>
     
     
     {/* widget (the right side of twitter) */}
      <Widgets/>
     
    </div>
  );
}

export default App;
