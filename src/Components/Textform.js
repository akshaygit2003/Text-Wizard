import React, { useState } from "react";

export default function Textform(props) {
  const converttouppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Text Has been converted to Uppercase", "success");
  };

  const converttolowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Text Has been converted to Lowercase", "success");
  };

  const cleartext = () => {
    let newText = "";
    setText(newText);
    props.showalert("Text Has been Cleared", "success");
  };

  const handlecopy = () => {
    navigator.clipboard.writeText(text);
    props.showalert("Text Has been Copied ", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleonchange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "orange" : "black",
        }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
              border: "2px solid black ",
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={converttouppercase}
          disabled={text.length === 0}
        >
          <b>Convert to Uppercase</b>
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={converttolowercase}
          disabled={text.length === 0}
        >
          <b>Convert to Lowercase</b>
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={cleartext}
          disabled={text.length === 0}
        >
          <b>Clear Text </b>
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handlecopy}
          disabled={text.length === 0}
        >
          <b>Copy Text </b>
        </button>
        <button
          type="submit"
          onClick={speak}
          disabled={text.length === 0}
          className="btn btn-warning mx-2 my-2"
        >
          Speak Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your Text summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters{" "}
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes to read the whole paragraph
        </p>
        <h2>Preview Your text 👇</h2>
        <p>
          <b>
            {text.length > 0
              ? text
              : "Type something in the Text box above or copy and paste it ! "}
          </b>
        </p>
      </div>
    </>
  );
}
