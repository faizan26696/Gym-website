import "./App.css";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Card from "./Pages/SuccessStory/Card";
import Navbar from "./component/Navbar/Navbar";
import Classes from "./Pages/Classes/Classes";
import Footer from "./component/Footer/Footer";
import SignUp from "./component/form/login/Signup";
import Login from "./component/form/login/Login";
import { useEffect } from "react";
import Price from "./Pages/Home/price/Price";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Login}/>
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/home" Component={Home} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/classes" Component={Classes} />
        <Route path="/success" Component={Card} />
        <Route path="/price" Component={Price} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
