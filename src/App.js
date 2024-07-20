import { BrowserRouter, Route, Routes} from "react-router-dom"
import styles from "./App.scss";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer";
import {Home, Contact, Login,Reset,Register} from "./pages"
import { ToastContainer } from "react-toastify";


function App() {
  return (
    //App
    <>
   
    <BrowserRouter>
    <ToastContainer/>
    <Header/>
    <Routes>
      <Route path="/" element ={<Home/>} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={ <Login/> }/>
      <Route path="/register" element={ <Register/> }/>
      <Route  path="/reset" element={<Reset/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   
    </>
  );
}

export default App;
