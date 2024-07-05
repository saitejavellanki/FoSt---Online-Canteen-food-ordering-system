import { BrowserRouter, Route, Routes} from "react-router-dom"
import styles from "./App.scss";
import Header from "./components/header/Header";

import Footer from "./components/footer/Footer";
import {Home, Contact, Login} from "./pages"

function App() {
  return (
    //App
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element ={<Home/>} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={ <Login/> }/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
