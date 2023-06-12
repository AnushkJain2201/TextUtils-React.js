import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("UpperCase Was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperCase" , "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase" , "success");
  }

  const clearText = () => {
    setText("");
    props.showAlert("Text Cleared" , "success");
  }

  return (
    <>
      <div className="container">
        <h1 style={{color: props.mode === 'light'?'black':'white'}}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="12"
            value={text}
            onChange={handleOnChange}
            style = {{backgroundColor: props.mode === 'light'?'white':'black' , color: props.mode === 'light'?'black':'white'}}
          ></textarea>
        </div>
        <button disabled = {text.length === 0} className={`btn btn-${props.mode === 'light'?'primary':'dark'} mx-1 my-1`} onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button disabled = {text.length === 0} className={`btn btn-${props.mode === 'light'?'primary':'dark'} mx-1 my-1`} onClick={handleDownClick}>
          Convert To LowerCase
        </button>
        <button disabled = {text.length === 0} className={`btn btn-${props.mode === 'light'?'primary':'dark'} mx-1 my-1`} onClick={clearText}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element) => {return element.length !== 0}).length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing To Preview"}</p>
      </div>
    </>
  );
}
