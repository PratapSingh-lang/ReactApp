import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Uppercase was clicked" + text);
        setText(text.toUpperCase())
        // setText("You have clicked on handle Up clicked")
    }
    const handleOnChange = (event) =>{
        console.log("On change was clicked");
        setText(event.target.value);
    }
    // text is a state variable
    const [text, setText] = useState('');
    // text = "new Text"; //Wrong way of changing value
    // setText("new text"); //Correct way to set value

    const handleLowerClick = () =>{
        setText(text.toLowerCase())
    } 
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label for="myBox" class="form-label"></label>
        <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2'  onClick={handleUpClick} >Convert To UpperCase</button>
        {/* <br/>
        <br/> */}
        <button className='btn btn-primary mx-2' onClick={handleLowerClick} >Convert To LowerCase</button>
    </div>
    <div className='mb-2'>
        <h2>Your text Summary</h2>
        <p>
            {/* {text.length === 0 ? text.split(" ").length - 1  : text.split(" ").length }   */}
          {text.split(" ").length - 1} words and {text.length} characters</p>
        <p>Time to read content is : {text.split(" ").length * 0.008}</p>
        <h1>Preview</h1>
        {text}
    </div>
    </>
  )
}
