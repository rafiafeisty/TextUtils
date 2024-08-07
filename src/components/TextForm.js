import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");

    const UpperClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case.", "success");
    }

    const LowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case.", "success");
    }

    const FirstClick = () => {
        let sentences = text.split(". ");
        let firstCharacter = sentences.map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1));
        let newText = firstCharacter.join(". ");
        setText(newText);
        props.showAlert("Converted first letter after the full stop to upper case.", "success");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Starting the speech.", "success");
    }

    const countWords=(text)=>{
        let wordcount=text.trim().split(/\s+/);
        return wordcount.filter(word=>word.length>0).length;
    }

    const copyText = () => {
        navigator.clipboard.writeText(text).then(() => {
            props.showAlert("Text copied to clipboard.", "success");
        }).catch(() => {
            props.showAlert("Failed to copy text.", "danger");
        });
    }

    const onChangeHandler = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="container" style={{color: props.mode === "dark" ? "white" : "#042743"}}>
                <h1 className='my-4'>{props.heading}</h1>
                <div className="form-group">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={onChangeHandler} style={{backgroundColor: props.mode === "dark" ? "#224f74" : "white", color: props.mode === "dark" ? "white" : "#042743"}}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={UpperClick}>Convert to Upper Case</button>
                <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={LowerClick}>Convert to Lower Case</button>
                <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={FirstClick}>Convert First Letter After '.' to Upper Case</button>
                <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={copyText}>Copy Text</button>
                <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
            </div>
            <div className="container my-3" style={{color: props.mode === "dark" ? "white" : "#042743"}}>
                <h2>Summary</h2>
                <p>{countWords(text)} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter(word => word.length > 0).length} minute read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
            </div>
        </>
    );
}
