import {React} from "react";
import "./Components/css/App.css"  
import Header from "./Components/NoteComponents/Header";
import Notes from "./Components/NoteComponents/Notes";



function App() {

  return (
    <div className="main">
     
      {/*  Its is a  Header Part */}
      <Header></Header>

         {/*  Its is a  Notes Part */}
      <Notes></Notes>


       </div>
  );
}

export default App;
