
import React, {useState} from 'react'

export default function Form(props) {
const HandleOnChange = (event)=>{
    // console.log("Handle On Change is Activated")
    setText(event.target.value);
}
const HandleUpperCaseClick = ()=>{
    // console.log("Upper Case Button Clicked"+text)
    let newtext=text.toUpperCase();
    setText(newtext)
    
    if(text?.length>0){
        props.showalert("Text has been changed to Upper Case","success");

    }
        else{
            props.showalert("No text","danger");
        }
}

const HandleLowerCaseClick = ()=>{
    // console.log("Lower Case Button Clicked"+text)
    let newtext=text.toLowerCase();
    setText(newtext);
    
    if(text?.length>0){
        props.showalert("Text has been changed to Lower Case","success");
    }
        else{
            props.showalert("No text","danger");
        }
}

// const RemoveUnwantedSpacesClick = ()=>{
//     console.log("Remove Unwanted Spaces Button Clicked")
//     let newtext=text.toUpperCase();
//     setText(newtext)
// }
const ClearText = ()=>{
    // console.log("Clear Text")
    setText('')
    if(text?.length>0){
        props.showalert("Text has been clear","success");
    }
        else{
            props.showalert("No text to clear","danger");
        }
}
// const CopyText = ()=>{
//     // console.log("Copy Text")
//     navigator.clipboard.writeText(`${text}`)
//     alert(`You have copied text`);
// }
const CopyText = ()=>{
    let mytext=document.getElementById("Box");
    mytext.select();
    navigator.clipboard.writeText(mytext.value);

    // alert("Text copied");
    if(text?.length>0){
    props.showalert("Text has been copied","success");
}
    else{
        props.showalert("Nothing to copy","danger");
    }
}
const Speak = ()=>{
    // console.log("Copy Text")
    let newtext=new SpeechSynthesisUtterance();
    newtext.text=text;
    window.speechSynthesis.speak(newtext);
    // alert(`You have copied text`);
    // if(SpeakOff===click){
    //     window.speechSynthesis.speak('');
    // }
    if(text?.length>0){
        props.showalert("Text is converted to voice","success");
    }
        else{
            props.showalert("Nothing to Speak","danger");
        }
}
// const SpeakOff=()=>{
//     let newtext=new SpeechSynthesisUtterance();
//     newtext.text='';
//     window.speechSynthesis.speak(newtext);
    
// }

const RemoveSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    if(text?.length>0){
        props.showalert("All unwanted spaces removed","success");
    }
        else{
            props.showalert("No text","danger");
        }
}

// onDoubleClick={SpeakOff}

    const [text, setText]=useState();
    // setText("new text");
  return (
    <>
    
    <div className={`container text-${props.mode==='light' ? 'dark' : 'light'}`}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
  <label htmlFor="Box" className="form-label">Write in it</label>
  <textarea className="form-control" style={{backgroundColor:props.mode==='dark' ? 'grey' : 'white'}} value={text} onChange={HandleOnChange} id="Box" rows="10"></textarea>
</div>
    <button className="btn btn-primary mx-1" onClick={HandleUpperCaseClick} type="submit">Convert to UpperCase</button>
    <button className="btn btn-primary mx-1" onClick={HandleLowerCaseClick} type="submit">Convert to LowerCase</button>
    {/* <button className="btn btn-primary mx-1" onClick={RemoveUnwantedSpacesClick} type="submit">Remove Unwanted Spaces</button> */}
    <button className="btn btn-primary mx-1" onClick={Speak} type="submit">Speech</button>
    {/* <button className="btn btn-primary mx-1" onClick={SpeakOff} type="submit">SpeechOff</button> */}
    <button className="btn btn-primary mx-1" onClick={RemoveSpaces} type="submit">RemoveExtraSpaces</button>
    <button className="btn btn-primary mx-1" onClick={ClearText} type="submit">Clear</button>
    <button className="btn btn-primary mx-1" onClick={CopyText} type="submit">Copy</button>
    </div>

    <div className={`container my-3 border border-5 text-${props.mode==='light' ? 'dark' : 'light'}`}>
        
        <h1>Your Text Summary</h1>
        <p>{text?.length>0 ? text?.split(" ").length : 0} words and {text?.length} character</p>
        <p>{0.008* (text?.length>0 ? text?.split(" ").length : 0 )} Minutes to read</p>
        <div className="container my-3 border border-3">
        <h2 className="Preview">Preview</h2>
        <p>{text?.length>0 ? text : "Enter something above in text box to preview it!!"}</p>
        </div>
    </div>
    </>
  )
}