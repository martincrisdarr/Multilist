import Home from "./components/Home/Home";
import MarketList from "./components/MarketList/MarketList";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/marketlist" element={<MarketList />} />
      </Routes>
    </>
  );
}

export default App;
