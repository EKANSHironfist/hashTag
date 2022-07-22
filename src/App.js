import React from "react";
import Sidebar from "./Sidebar";
import "./App.css";

function App() {
  return (
    //BEM convention
    <div className="app">
     <h1>
      Lets build twitter-clone name as HASHTAG  
     </h1>

     {/* sidebar of twitter(on the left side of screen) */}
     <Sidebar/>

     {/* feed  (in the middle, and only scrollable part of the twitter window)*/}

     {/* widget (the right side of twitter) */}

     
    </div>
  );
}

export default App;
