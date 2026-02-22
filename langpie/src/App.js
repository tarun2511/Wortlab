import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import React, {createContext, useState} from "react";



const modalContext = createContext(null);
function App() {

  const [isModalClosed, setIsModalClosed] = useState(true);
  
  return (
    <modalContext.Provider value={{isModalClosed, setIsModalClosed}}>
    <>
    <Navbar />
    <Home />
    </>
    </modalContext.Provider>
  );
}

export {modalContext};
export default App;
