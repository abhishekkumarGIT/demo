import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
  const convertToUpperCase = () => {
    console.log("in uppercase function");
    setText(text.toUpperCase());
  };

  const convertToLowerCase = () => {
    console.log("in lowercase function");
    setText(text.toLowerCase());
  };

  const clearTextArea = () => {
    console.log("in claerTextArea function");
    setText("");
  };

  const calculateLength = () => {
    console.log("in calculateLength function");
    setText("Length of String is : " + text.length);
  };

  // const handleReverseText = () => {
  //   let textArray = text.split(" ");
  //   let reverseArray = '';
  //   for (let i = textArray.length-1; i >= 0; i--) {
  //     reverseArray = reverseArray + textArray[i];
  //   }
  //   setText(reverseArray);
  // };

  const handleOnChange = (event) => {
    console.log("in onchange function");
    setText(event.target.value)
  };

  const [text, setText] = useState("Enter Your Text here");
  return (
    <>
      <div className="container">
        <h4 className='text-warning'>{props.heading}</h4>
        <div className="mb-3" style={{ backgroundColor: 'rgba(255, 0, 0, 0.4)' }}>
          <textarea value={text} onChange={handleOnChange} className="form-control" id="myTextBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={convertToUpperCase}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={convertToLowerCase}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={clearTextArea}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={calculateLength}>Calculate Text Length</button>
        {/* <button className="btn btn-primary mx-1" onClick={handleReverseText}>Reverse Text</button> */}
      </div>
      <div className="container my-3">
        <h2 className='text-warning'>Text Summary</h2>
        <p className='text-warning'>Total Words : {text === "" ? text.split(" ").length -1 : text.split(" ").length} and Total Characters : {text.length}</p>
        <h2 className='text-warning'>Preview</h2>
        <p className='text-warning'>{text}</p>
      </div>
    </>
  )
}

Textform.propTypes = {
  heading : PropTypes.string.isRequired,
};
