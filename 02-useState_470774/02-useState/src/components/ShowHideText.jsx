// src/components/ShowHideText.jsx

import { useState } from "react";

function ShowHideText() {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          /* complete the missing code */
          if(showText==false){
            setShowText(true)
          }else{
            setShowText(false)
          }
        }}
      >
        Show/Hide Text
      </button>
      {showText && <p>This is a toggled text!</p>}
    </div>
  );
}

export default ShowHideText;
