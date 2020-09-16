import React from "react";
import heroImage from "../images/pexels-photo-1029141.jpeg";

const headerStyle = {
  "backgroundImage": `url(${heroImage})`,
  "maxWidth": "100vw",
  height: "calc(100vw * .43333)",
  "backgroundSize": "cover",
  position: "relative"
}

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Google Books Search</h1>
            <p>Go ahead, search for a book!</p>
        </header>
    );
}

export default Header;