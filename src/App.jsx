import './App.css';

import React from "react";
import ColorBlock from "./ColorBlock";

function App() {
  return (
    <div>
      <h1 style={
        { textAlign: "center"}
      }>
        Color Block</h1>
      <ColorBlock />
    </div>
  );
}

export default App;
