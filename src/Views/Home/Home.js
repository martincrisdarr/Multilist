import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="w-full h-screen  bg-[url('https://img.freepik.com/vector-gratis/fondo-bosque-dibujos-animados-paisaje-parque-natural_107791-2040.jpg?t=st=1657910993~exp=1657911593~hmac=f33da207ca8294270a879be9bbb4a5d8201ccaab92170c472b06ce163feda5a5&w=996')] bg-cover object-cover bg-no-repeat flex justify-center items-center">
        <div className="w-[300px] h-[400px] bg-white/20  border-2 border-black ">
          <ul className="h-full w-full flex flex-col justify-evenly items-center ">
            <Link to="/marketlist">
              <li className="border-2 w-[260px] bg-white rounded-md border-black px-20 py-2 text-center ">
                Market List
              </li>
            </Link>
            <Link to="/notes">
              <li className="border-2 w-[260px] bg-white rounded-md border-black px-20 py-2 text-center ">
                Notes
              </li>
            </Link>
            <Link to="/prueba">
              <li className="border-2 w-[260px] bg-white rounded-md border-black px-20 py-2 text-center ">
                PRUEBA
              </li>
            </Link>
            <li className="border-2 w-[260px] bg-white rounded-md border-black py-2 text-center ">
              Lorem
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
