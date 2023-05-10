import "../css/Note.css";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



const Note = ({id , text , deleteNote}) => {
 
  return (
    <div>
        
       <div className="note">

      
   

        <div className="note__body">
           {text}
        </div>

        <div className="note__footer" style={{justifyContent: "flex-end"}}>

        <DeleteForeverIcon className="note__delete" onClick={() => deleteNote(id)}> </DeleteForeverIcon>
      
        </div>
       

        
       </div>

    </div>
  )
}

export default Note
