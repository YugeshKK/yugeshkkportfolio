import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Navbar from './components/Navbarr';
import './App.css'
import About from './components/About';
import Projects from './components/projects';

import Footer from './components/footer';


function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Projects/>

    <Footer/>
    </>
  
      );
    }


export default App;