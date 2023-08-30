import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Contactus from "./components/Contactus"
import Aboutus from "./components/Aboutus"
import Signup from "./components/Signup"
import Gallery from "./components/Gallery"
import {Routes,Route} from "react-router-dom"


import 'swiper/css';

function App() {

  return (
<>
<Navbar />

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Contact" element={<Contactus/>}/>
  <Route path="/about" element={<Aboutus/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/gallery" element={<Gallery/>}/>
</Routes>

<Footer/>
</> 
 );
}

export default App;

