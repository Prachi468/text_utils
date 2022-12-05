import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase" , "Success")        
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case" , "Success")  
    }
    const handleClClick = () => {
        setText("");
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    
    const [text, setText] = useState('');
    return (
        <>
            <div className="container my-0">
                <h1 className={`m-1 d-flex justify-content-center text-${props.mode === 'light'?'dark':'light'}`} >{props.heading}</h1>
                <div className="m-3">
                    <textarea className="form-control  my-1 mx-3" id="myText" rows="8" value={text} onChange={handleOnChange} placeholder="Enter Text Here" style={{bacgroundClolor:props.mode === 'light'?'white':'gray'}}></textarea>
                </div>
                <div className="container">
                    <button className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary my-3" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-3 my-3" onClick={handleClClick}>Clear</button>
                </div>
                <div className={`container my-3  text-${props.mode === 'light'?'dark':'light'}`}>
                    <h2 className="mx-3 ">Your Text Summary</h2>
                    <p className="my-1 mx-3">{text.split(" ").filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
                    <p className="my-1 mx-3" >{0.008 * text.split(" ").filter((element)=>{ return element.length!==0}).length} Minmutes to read this content</p>
                    <h2 className="my-2 mx-3" >Preview</h2>
                    <p className="my-1 mx-3">{text}</p>
                </div>
            </div>
        </>
    );
}
