import Home from "./Views/Home/Home";
import MarketList from "./Views/MarketList/MarketList";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Notes from "./Views/Notes/Notes";
import Note from "./components/Notes/Note";
import { NotesContext } from "./Context/Context";
import ErrorNotPageFound from "./Views/ErrorNotPageFound/ErrorNotPageFound";
import { useState } from "react";
function App() {
  const [notes, setNotes] = useState([])
  const [nota, setNota] = useState({})
  return (
    <>
    <NotesContext.Provider value={{notes, setNotes, nota, setNota}}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/marketlist" element={<MarketList />} />
        <Route exact path="/notes" element={<Notes />} />
        <Route exact path="/note/:id" element={<Note />} />
        <Route path="*" element={<ErrorNotPageFound />} />
      </Routes>
    </NotesContext.Provider>
    </>
  );
}

export default App;
