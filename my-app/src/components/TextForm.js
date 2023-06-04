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
    const [text, setText] = useState('Enter text here');
    // text = "new Text"; //Wrong way of changing value
    // setText("new text"); //Correct way to set value
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label for="myBox" class="form-label"></label>
        <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick} >ConvertToUpperCase</button>
    </div>
  )
}
