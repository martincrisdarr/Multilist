import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className=" w-full absolute flex justify-end bg-transparent px-16 py-8">
        
          <div className="bg-white w-12 h-12 flex justify-center items-center rounded-2xl ">
          <Link to="/"><AiOutlineHome size="2rem"  /></Link>
          </div>
          
        
      </div>
    </>
  );
}

export default Navbar;
