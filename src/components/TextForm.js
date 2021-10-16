// state belongs to component.. Assume textarea mein heading text likha hua hai to wo uski ek state hai jo ek variable mein store hogi, par jaise aap kuch aur likhte ho to uski state badal gayi aur jo naya updated content hai wo ek doosre variable mein store ho jayega uar us doosre variable ko aap use karo as your need to show updated content
import React, {useState} from 'react'   // useState ek hook hai, class based components we can use this.state to set state but in rfc we introduce hooks concept...basically bina class banaye class ke features ko use karpane is hooks

export default function TextForm(props) {
    const handleOnChange = (event)=> {
        console.log("OnChange");
        setText(event.target.value);   {/* textarea mein jo bhi pehle se tha aur jo bhi extra kuch likhoge nasically textarea ka jo bhi content hai ya jitni bhi values usme present hai use setText mein lekar Text state ko dedo, ye sab updation text state mein hoga jo ki equals to hai value attribute,hence text state update ho rahi hai*/}
    } 
    
    const handleUpClick = ()=> {
        console.log("Uppercase Was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const [text, setText]  = useState('Enter text here');  
   
                // ye array destructuring jaisa kuch hai
                // - text ek variable ya precisely ek state hai jiski default value hai Enter text here
                // -setText-> jab bhi kuch update hoga wo setText function pakadlega aur fir uski madad se you can update text state
                // - hum directly text = "dbdhbjk" karke update nahi kar sakte we have to use updation function that is setText
    // text = "new text";  // wrong way to change the state
    // setText("new text");  // correct way to change the state
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3 ">
               
                <textarea className="form-control" value= {text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
        </div>
    );
}
