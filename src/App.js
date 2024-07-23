import { BrowserRouter, Route, Routes} from "react-router-dom"
import styles from "./App.scss";

import Footer from "./components/footer/Footer";
import { Contact, Login,Reset,Register, Home} from "./pages"
import { ToastContainer } from "react-toastify";
import Homehandler from "./components/homehandler/Homehandler";
import Navbar from "./components/navbar/Navbar";


function App() {

  

  return (
    //App
    <>
   
    <BrowserRouter>
    <ToastContainer/>
    {/*<Header/>*/}
    {<Navbar/>}
    <Routes>
      {/*<Route path="/" element ={<Home/>} />*/}
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={ <Login/> }/>
      <Route path="/register" element={ <Register/> }/>
      <Route  path="/reset" element={<Reset/>}/>
      <Route  path="/" element={<Homehandler/>}/>
      <Route  path="/home" element={<Home/>}/>
    </Routes>
    {/*<Footer/>*/}
    </BrowserRouter>
   
    </>
  );
}

export default App;
