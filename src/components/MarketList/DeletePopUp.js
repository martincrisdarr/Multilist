import React from 'react'

function DeletePopUp({handleDelete, handleCancel,display}) {
  return (
    <>
      <div className={`${display} flex-col absolute top-[5%] right-6 sm-ml-[15%] h-36 text-center px-6 py-8 bg-white rounded-xl border-black border-2 trispace transition-all duration-500`} >
        <p>Are you sure you want to delete all items?</p>
        <div className='mt-6 flex gap-16 justify-center text-lg'>
          <button onClick={handleDelete} className='py-2 px-4 bg-red-600 text-white rounded-xl'>Delete</button>
          <button onClick={handleCancel} className='py-2 px-4 bg-slate-400 text-white rounded-xl'>Cancel</button>
        </div>
      </div>
    </>
  )
}

export default DeletePopUp