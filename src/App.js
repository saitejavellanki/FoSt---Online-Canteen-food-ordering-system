import { BrowserRouter, Route, Routes} from "react-router-dom"
import styles from "./App.scss";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";

function App() {
  return (
    //App
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element ={<Home/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
