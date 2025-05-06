import React, { useState, useEffect } from "react";
import cn from 'classnames';

const ColorBlock = () => {
  const [color, setColor] = useState("red");
  const [buttonColor, setButtoncolor] = useState("yellow")

  const toggleColor = () => {
    setColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
    setButtoncolor ('active');
  };

  useEffect(() => {
    console.log(`Current color: ${color}`);
  }, [color]);

  return (
    <div style={{
      width: "90%",
      position:"relative",
      height: "400px",
      backgroundColor: color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "20px auto",
      borderRadius: "10px",
    }}>
      <button 
      onClick={toggleColor} 
      className={cn({ active: buttonColor === 'active' })}
      style={{ 
      padding: "20px", 
      position:"absolute",
      fontSize: "30px",
      backgroundColor: "White",
      boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
      borderRadius: "10px",
      border: "none",

      }}>
        Change Color
      </button>
    </div>
  );
};

export default ColorBlock;
