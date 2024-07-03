import { BrowserRouter, Route, Routes} from "react-router-dom"
import styles from "./App.scss";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    //App
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element ={<Home/>} />
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
