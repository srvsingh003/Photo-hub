import React from "react";
import Searchbar from "./components/searchbar";
import { useState } from "react";
function App() {
  const [imagepresent, setImagepresent] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
        flexDirection: "column",
        marginBottom: "20px",
      }}
    >
      <span
        className="header"
        style={{
          // fontSize: "30px",
          fontFamily: "cursive",
          letterSpacing: "8px",
        }}
      >
        Photo Hub
      </span>
      <div
        style={{
          border: "1px solid grey",
          width: "50%",
          // width: "auto",
          // maxWidth: "80%",
          height: imagepresent ? "auto" : "400px",
        }}
      >
        <Searchbar setImagepresent={setImagepresent} />
      </div>
    </div>
  );
}

export default App;
