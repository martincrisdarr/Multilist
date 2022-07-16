import React from "react";
import { useState } from "react";
import { v4 } from "uuid";
import AddNotes from "../../components/Notes/AddNotes";
import NotesMap from "../../components/Notes/NotesMap";
import { useContext } from 'react'
import {NotesContext} from '../../Context/Context'

function Notes() {
  const {notes, setNotes} = useContext(NotesContext)
  const [noteValue, setNoteValue] = useState([]);
  
  const handleChange = (e) => {
      setNoteValue({ name: e.target.value, id: v4() });    
  };
  const handleSubmit = (e) => {
    if (notes.length < 10) {
      setNotes([...notes, noteValue]);
    }
    e.preventDefault();
    e.target.reset();
  };
  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  
  
  return (
    <>
      <div className="w-full min-h-screen bg-[url('https://img.freepik.com/foto-gratis/fondo-hojas-verdes-tropicales_53876-88891.jpg?t=st=1657906269~exp=1657906869~hmac=b8bfdb97f424dc27481d9813a3c6639cf4e4cb12b808b261797b4932d053d76a&w=826')] bg-no-repeat bg-cover object-cover md:px-8 py-16">
        <AddNotes handleSubmit={handleSubmit} handleChange={handleChange} />
        {notes.length === 10 ? <p className="absolute left-12 top-8 text-white font-semibold p-4 bg-red-500 rounded-xl">List Complete!</p> : null}
        <div className="w-full  flex justify-center gap-8 flex-wrap px-2 ">
          <NotesMap notes={notes} handleDelete={handleDelete} />
        </div>
        
      </div>
      
    </>
  );
}

export default Notes;
