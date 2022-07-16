import React from "react";
import { BsTrash } from "react-icons/bs";
function Items({ list, handleRemove, handleRemoveAll }) {
  return (
    <>
      <div className="flex flex-col gap-4 p-6 h-[80%] w-full ">
        {list.map((p) => {
          return (
            <div
              name="name"
              className="flex justify-between items-center pr-2 gap-6 w-full trispace border-b-2 border-slate-300 z-1"
              key={p.id}
            >
              <p className="flex w-full flex-wrap">{p.name} </p>
              <BsTrash
                size='1.5rem'
                className="cursor-pointer"
                onClick={() => handleRemove(p.id)}
              />
            </div>
          );
        })}
        
      </div>
      <div className="absolute bottom-[10%] ml-6 px-12 text-xl flex items-center justify-between w-[400px]  h-16 bg-white rounded-br-xl border-t-2 border-slate-900">
        <p>
        Delete all
        </p>
        <BsTrash onClick={handleRemoveAll} className="mr-6 bg-red-600 h-12 w-16 px-4 rounded-xl cursor-pointer" />
      </div>
      
    </>
  );
}

export default Items;
