import React, { useState } from "react";

export default function About() {
  const [mystyle, setMystyle] = useState({
    color: "white",
    backgroundColor: "#020334",
  });

  const [btntext, setBtntext] = useState("Enable light mode");
  const togglestyle = () => {
    if (mystyle.color === "black") {
      setMystyle({
        color: "white",
        backgroundColor: "#020334",
        border: "1px solid white ",
      });
      setBtntext("Enable light mode");
    } else {
      setMystyle({ color: "black", backgroundColor: "white" });
      setBtntext("Enable dark mode");
    }
  };
  return (
    <div className="container" style={mystyle}>
      <h1> About Text-Utils</h1>
      <div className="accordion" id="accordionExample" style={mystyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Text Conversion
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <li>
                <strong>Convert to Uppercase:</strong> Instantly transform your
                text into all uppercase letters with a single click. This is
                perfect for making your text stand out or when following
                specific formatting guidelines.
              </li>
              <li>
                <strong>Convert to Lowercase:</strong> Convert your text to all
                lowercase letters easily. This is useful for maintaining
                consistency in documents or when a softer tone is required.
              </li>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo" style={mystyle}>
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Text Management
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <li>
                <strong>Clear Text: </strong> Quickly erase all the text from
                the input field to start fresh. Ideal for when you need to input
                new text without manually deleting the old one.
              </li>
              <li>
                <strong>Reset Text:</strong> Reverts the text to its original
                state before any modifications. Useful for comparing changes or
                when you want to start over without clearing everything.
              </li>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree" style={mystyle}>
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Text-to-Speech
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <li>
                <strong>Speak Text: </strong> Convert your text into speech with
                a single tap. This feature is great for proofreading,
                multitasking, or accessibility needs, allowing you to listen to
                your text instead of reading it.
              </li>
            </div>
          </div>
        </div>
      </div>
      <button onClick={togglestyle} type="button" class="btn btn-primary my-3">
        {btntext}
      </button>
    </div>
  );
}
