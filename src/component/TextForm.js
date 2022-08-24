import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpperCase = (e) => {
    let uText = text.toUpperCase();
    setText(uText);
    if (text.length > 0) {
      props.showAlert("Converted to Uppercase", "success");
    }
  }

  const handleLowerCase = (e) => {
    let lText = text.toLowerCase();
    setText(lText);
    if (text.length > 0) {
      props.showAlert("Converted to Lowercase", "success");
    }
  }

  const handleOnChange = (e) => {
    setText(e.target.value);
  }

  const handleClear = (e) => {
    setText("");
    if (text.length > 0) {
      props.showAlert("Text Cleared!!", "success");
    }

  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    if (text.length > 0) {
      props.showAlert("Text Copyied!!", "success");
    }
  }

  const handleRemoveSpaces = () => {
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "));
    if (text.length > 0) {
      props.showAlert("Remove Extra spaces!!", "success");
    }
  }

  return (
    <>
      <div className="container my-2">
        <h2 className={`text-${props.mode === "navbar-light bg-light" ? "dark" : "light"}`}>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className={`form-control my-2 text-${props.mode === "navbar-light bg-light" ? "dark" : "light"} 
            bg-${props.mode === "navbar-light bg-light" ? "light" : "dark"}`}
            id="myBox"
            value={text}
            rows="5"
            onChange={handleOnChange}
          ></textarea>
          <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpperCase}>to convert Uppercase</button>
          <button disabled={text.length === 0} className="btn mx-1 btn-primary my-1" onClick={handleLowerCase}>to convert LowerCase</button>
          <button disabled={text.length === 0} className="btn mx-1 btn-primary my-1" onClick={handleClear}>Clear Text</button>
          <button disabled={text.length === 0} className="btn mx-1 btn-primary my-1" onClick={handleCopy}>Copy Text</button>
          <button disabled={text.length === 0} className="btn mx-1 btn-primary my-1" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
        </div>
      </div>

      <div className={`container text-${props.mode === "navbar-light bg-light" ? "dark" : "light"}`}>
        <h4>Your text summary</h4>
        <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{ return element.length!==0}).length} Minutes read</p>
        <h4>Preview</h4>
        <p style={{overflowWrap:"break-word"}}>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}


TextForm.prototype = {
  heading: PropTypes.string
}