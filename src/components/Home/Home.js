import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="w-full h-screen bg-blue-200 flex justify-center items-center">
        <div className="w-[300px] h-[400px] border-2 border-black ">
          <ul className="h-full w-full flex flex-col justify-evenly items-center ">
            <Link to="/marketlist">
              <li className="border-2 border-black px-20 py-2 text-center ">
                Market List
              </li>
            </Link>
            <li className="border-2 border-black w-[80%] py-2 text-center ">
              Calendario de tareas
            </li>
            <li className="border-2 border-black w-[80%] py-2 text-center ">
              Lorem
            </li>
            <li className="border-2 border-black w-[80%] py-2 text-center ">
              Lorem
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
