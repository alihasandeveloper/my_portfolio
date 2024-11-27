import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navber from "./components/Navber.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

const App = () => {
    return (
       <main className='bg-slate-300/20'>
           <BrowserRouter>
               <Navber/>
               <Routes>
                   <Route path='/'  element={<Home/>} />
                   <Route path='/about'  element={<About/>} />
                   <Route path='/project'  element={<Projects/>} />
                   <Route path='/contact'  element={<Contact/>} />
               </Routes>
           </BrowserRouter>
       </main>
    );
};

export default App;