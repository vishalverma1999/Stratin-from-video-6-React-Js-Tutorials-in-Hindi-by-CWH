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

    const handleLoClick = ()=> {
        console.log("Lowercase Was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = ()=> {
        console.log("Clear Was Clicked" + text);
        let newText = '';
        setText(newText);
    }

    const handleCapitalisedCaseClick = ()=> {
        console.log("Capitalised Case Clicked");
        let newText = text.split(' ');
        // console.log(newText);
        let capitalisedText = '';
        newText.forEach(element => {
        //    console.log(element.charAt(0).toUpperCase()+ element.substr(1));
        capitalisedText += element.charAt(0).toUpperCase()+ element.substr(1).toLowerCase() + " ";
        });
        setText(capitalisedText);
    }

    const handleAlternatingCaseClick = ()=> {
        console.log("aLtErNaTiNg Case Clicked");
        let newText = text;
        // console.log(newText);
        let charAtEvenIndex ;
        let charAtOddIndex ;
        let array = [];
       for (let index = 0; index < newText.length; index++) {

           if(index%2 == 0){
               charAtEvenIndex = newText.charAt(index);
               array.push(charAtEvenIndex.toLowerCase());   // characters at even indexes pushed in array
           }
           else{
           charAtOddIndex = newText.charAt(index);
           console.log(charAtOddIndex);
           array.push(charAtOddIndex.toUpperCase());     //   characters at odd indexes pushed in array
           }

    };
    // console.log(array);
    newText = ""
    array.forEach(element=>{
    newText += element;
    });
    setText(newText);
}

    const [text, setText]  = useState('');  
   
                // ye array destructuring jaisa kuch hai
                // - text ek variable ya precisely ek state hai jiski default value hai Enter text here
                // -setText-> jab bhi kuch update hoga wo setText function pakadlega aur fir uski madad se you can update text state
                // - hum directly text = "dbdhbjk" karke update nahi kar sakte we have to use updation function that is setText
    // text = "new text";  // wrong way to change the state
    // setText("new text");  // correct syntax way to change the state, use it with some event handlers otherwise error will be thrown
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3 ">
               
                <textarea className="form-control" value= {text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear</button>
            <button className="btn btn-primary mx-1" onClick={handleCapitalisedCaseClick} >Capitalised Case</button>
            <button className="btn btn-primary mx-1" onClick={handleAlternatingCaseClick} >aLtErNaTiNg cAsE</button>
        </div>


    <div className="container my-3">
       <h1>Your text Summary</h1>
       <p> {text.split(' ').length} words, {text.length} characters</p>
       <p>{0.008 * text.split(" ").length} Minutes Read</p>
       <h2>Preview</h2>
       <p>{text}</p>
    </div>
    </>
    );
}




