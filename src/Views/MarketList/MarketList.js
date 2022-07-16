import React, { useState } from "react";
import { v4 } from "uuid";
import DeletePopUp from "../../components/MarketList/DeletePopUp";
import Items from "../../components/MarketList/Items";

function MarketList() {
  const [list, setList] = useState([]);
  const [itemValue, setItemValue] = useState([]);
  const [canceled, setCanceled] = useState(false)

  const handleChange = (e) => {
    setItemValue({ name: (e.target.value).toUpperCase(), id: v4() });
  };

  const handleSubmit = (e) => {
    setList([...list, itemValue])
    e.preventDefault();
    e.target.reset();
  };

  const handleRemove = (id) => {
    setList(list.filter((item) => item.id !== id));
  };
  const handleChangeCanceled = () =>{
    if (list.length !== 0){
      setCanceled(true)
    }
  }
  const handleRemoveAll = () =>{
    setList([])
    setCanceled(false)
  }
  const handleCancel = () =>{
    setCanceled(false)
  }

  return (
    <>
      <div className='pt-8 w-full bg-cover bg-[url("https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg")] h-screen px-8 sm:px-16 flex justify-center items-center trispace'>
        <div className="w-[450px] h-[80%] bg-white rounded-xl shadow-2xl overflow-scroll">
          <form
            onSubmit={handleSubmit}
            className="h-[20%] rounded-tr-xl rounded-tl-xl gap-6 w-full flex justify-center items-center bg-slate-900"
          >
            <input
              required
              autoFocus
              name="item"
              placeholder="Add to list!"
              className="py-2 px-2 rounded-lg outline-none"
              onChange={handleChange}
              type="text"
            />
            <button type="submit" className="py-2 px-4 bg-white rounded-xl shadow-xl">Add Item</button>
          </form>
          <Items list={list} handleRemove={handleRemove} handleRemoveAll={handleChangeCanceled} />
        </div>
      </div>
      <DeletePopUp 
      handleDelete={handleRemoveAll} 
      handleCancel={handleCancel}
      display={canceled == true ? 'flex' : 'hidden'} />
    </>
  );
}

export default MarketList;
