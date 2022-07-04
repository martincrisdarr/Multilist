import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="w-full fixed bg-transparent">
        <Link to="/">
          <AiOutlineHome size="2rem" />
        </Link>
      </div>
    </>
  );
}

export default Navbar;
