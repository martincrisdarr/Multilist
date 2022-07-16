import React from 'react'
import {ImArrowLeft} from 'react-icons/im'
import { Link, useParams } from 'react-router-dom'
import { useContext } from 'react'
import {NotesContext} from '../../Context/Context'


function Note() {
  const {id} = useParams()
  const {nota, setNota} = useContext(NotesContext) 
  return (
    <>
      <div className="w-full h-screen bg-[url('https://img.freepik.com/foto-gratis/fondo-hojas-verdes-tropicales_53876-88891.jpg?t=st=1657906269~exp=1657906869~hmac=b8bfdb97f424dc27481d9813a3c6639cf4e4cb12b808b261797b4932d053d76a&w=826')] bg-no-repeat bg-cover object-cover px-8 py-16 flex justify-center items-center">
        <div className="bg-white absolute top-8 left-8 w-12 h-12 flex justify-center items-center rounded-2xl ">
          <Link to='/notes'><ImArrowLeft size='1.5rem'/></Link>
        </div>
        <div className='w-[600px] h-[90%] bg-yellow-100 rounded-xl '>
          <div className='w-full flex justify-end p-2'>
            <p className='pr-12 pt-2 '>Edit</p>
            <p>{nota} </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Note