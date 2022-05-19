import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = 
    useState("");
   const handleUpClick = () => {
    const newText= text.toUpperCase();

      setText(newText);
    props.showAlert("Text has been set to upper case","success");
    }
    const handleloClick = () => {
      
        const newText= text.toLowerCase();
        setText(newText);
      props.showAlert("Text has been set to lower case","success");
      }
      const handleClrClick = () => {
      
       let newText="";
        setText(newText);
        props.showAlert("Text has been clear","success");
      }
      const handleCopyClick= () =>{
        var text= document.getElementById('Box');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been Copy to clipboard","success");
      }
      const handleExtraSpace =() =>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space has been remove!","success");
      }
      
    const handleOnChange=(e)=>{
      
        setText(e.target.value);
    }
    
    return (
        <div>
            <div className="container my-4" style={{color:  props.mode === 'dark'? 'white'  : 'black'}}>
              <h1>{props.heading} </h1>
                <div className="mb-3">

                    <textarea className="form-control" style= {{ backgroundColor:  props.mode=== 'dark'? 'grey'  : 'white' , color:  props.mode === 'dark'? 'white'  : 'black' } } id="Box" onChange={handleOnChange}  value={text} rows="3"></textarea>
                    <button className='btn btn-primary mx-2' onClick={handleUpClick}>Text convert to upercase</button>
                    <button className='btn btn-primary mx-2 ' onClick={handleloClick}>Text convert to Lowercase</button>
                    <button className='btn btn-primary mx-2 ' onClick={handleClrClick}>Clear the Text</button>
                    <button className='btn btn-primary mx-2 ' onClick={handleCopyClick}>Copy Text</button>
                    <button className='btn btn-primary mx-2 ' onClick={handleExtraSpace}>Remove Extra Space</button>

                    </div>
            </div>
            <div className='container' style={{color: props.mode === 'dark'? 'white'  : 'black'}}>
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} Character</p>
                <p>{0.008 * text.split("").length} minutes read only</p>
                <h2>Preview</h2>
                <p>{text.length>0? text :"Enter something on textform to preview here" }</p>
            </div>
        </div>
       
      
    )
   
}
