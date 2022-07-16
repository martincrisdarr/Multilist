import React, { useContext } from 'react'
import { BsTrash } from "react-icons/bs";
import { Link} from 'react-router-dom';
import { NotesContext } from '../../Context/Context';


function NotesMap({notes,handleDelete}) {
  const {nota, setNota} = useContext(NotesContext)
  
  return (
    <>
      {
        notes.map(note => {
          return (
            <div onClick={() => setNota(note.name)} className='w-44 md:w-56 h-48 bg-yellow-100 mt-12 shadow-xl eduBeginner text-3xl overflow-hidden ' key={note.id}>
              <div className='w-full flex justify-end p-2'>
                <BsTrash className='cursor-pointer' onClick={() => handleDelete(note.id)} />
              </div>
              <Link to={`/note/${note.id}`}>
              <div  className='w-full h-full'>
                <p className='px-4'>{note.name}</p>
              </div></Link>
              

            </div>
          )
        })
      }
    </>
  )
}

export default NotesMap