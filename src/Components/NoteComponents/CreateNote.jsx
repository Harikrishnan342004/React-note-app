import React from 'react'
import "../css/Note.css";
import LinearProgress from '@mui/material/LinearProgress';





 function CreateNote({ textHandler, saveHandler, inputText }){  //FUNCTION CONTAINS THREE PARAMETERS

  // Character Limits ...
  const charLimit = 100;
  const charLeft = charLimit - inputText.length;


  return (

    <div>
      <div className='note' style={{background: "black"}}> 
      
      <textarea

      placeholder= "type...."
      value={inputText}
      onChange={textHandler}
      
      name="" id="" cols="10" rows="5"  maxLength="100">

      </textarea>

      <div className="note__footer">

        <span className='label'>{charLeft} left </span>




        <div className="note__save" onChange={saveHandler}>Save</div>

      

      </div>


      <LinearProgress className='char__progress' variant="determinate" value={charLeft} />
       </div>
    </div>
  )
}

export default CreateNote
