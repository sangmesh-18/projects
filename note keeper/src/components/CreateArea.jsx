import React, { useState } from "react";
import { IoIosAdd  } from "react-icons/io";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const[isExpand,setExpand]=useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    
    event.preventDefault(); 
  }
  function expand(){
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
       {isExpand &&  <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpand?3:1}
        />
        <button style={{backgroundColor:"#f5ba13"}}
        onClick={submitNote}     >
          {
            <IoIosAdd fontSize="1.85rem"  />
          }

        </button>
      </form>
    </div>
  );
}

export default CreateArea;
