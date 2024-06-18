import React, { useState } from 'react'
import './Textform.css';
function TextForm(props) {
    const [text, setText] = useState('');
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const toggleUpCase = () => {
        let newValue = text.toUpperCase();
        setText(newValue);
        props.showAlert('success', "Converted To UpperCase");
    }
    const toggleLoCase = () => {
        let newValue = text.toLowerCase();
        setText(newValue);
        props.showAlert('success', "Converted To LowerCase");
    }
    const toggleExSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('success', "Removed the Extra Spaces");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('success', "Copied to Clipboard");

    }
    var handleClear = () => {
        setText("");
        props.showAlert('success', "Text is Cleared");
    }
    return (
        <div className="container" style={props.mode === 'light' ? { backgroundColor: '#accbed', color: 'black' } : { backgroundColor: "black", color: 'white' }}>
            <div className="mb-3 my-4 ">
                <label htmlFor="exampleFormControlTextarea1" className="form-label text-center"><h2>Try Our Text Tools For Free</h2></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="9" autoFocus value={text} onChange={handleOnChange} placeholder='Enter Your Text here' style={props.mode === 'light' ? { backgroundColor: '#E5E4E2', color: 'black' } : { backgroundColor: "black", color: 'white' }}></textarea>
            </div>
            <div className="buttonBox d-flex align-items-center justify-content-around">
                <button disabled={text.length === 0} type="button" className={`btn butn btn-${props.mode === 'light' ? 'success' : 'secondary'} btn-sm mx-2 my-2`} onClick={toggleUpCase}>Convert To UpperCase</button>
                <button disabled={text.length === 0} type="button" className={`btn butn btn-${props.mode === 'light' ? 'success' : 'secondary'} btn-sm mx-2 my-2`} onClick={toggleLoCase}>Convert To LowerCase</button>
                <button disabled={text.length === 0} type="button" className={`btn butn btn-${props.mode === 'light' ? 'success' : 'secondary'} btn-sm mx-2 my-2`} onClick={toggleExSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} type="button" className={`btn butn btn-${props.mode === 'light' ? 'success' : 'secondary'} btn-sm mx-2 my-2`} onClick={handleCopy}>Copy to Clipboard</button>
                <button disabled={text.length === 0} type="button" className={`btn butn btn-${props.mode === 'light' ? 'success' : 'secondary'} btn-sm mx-2 my-2`} onClick={handleClear}>Clear Text</button>
            </div>
            <h3>Text Summary</h3>
            <p> {text.split(/\s+/).filter((e) => { return e.length !== 0 }).length} words and {text.split(/\s+/).join('').length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter((e) => { return e.length !== 0 }).length} minutes read</p>
            <h3>Preview</h3>
            <p style={{ minHeight: "50px" }}>{!text ? "Nothing to preview" : text}</p>
        </div>
    )
}

export default TextForm
