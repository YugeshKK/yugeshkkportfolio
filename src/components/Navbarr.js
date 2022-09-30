import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar as NavBs } from 'react-bootstrap';
import logo from './ykk_logo.png'
import { useEffect, useState } from 'react';
import navicon1 from '../assets/img/nav-icon1.svg';
import navicon2 from '../assets/img/nav-icon2.svg';
import navicon3 from '../assets/img/nav-icon3.svg';
import git from '../assets/img/git1.png'

const Navbar = () => {
  const [active,setActive]=useState('home');
  const [scroll,setScroll]= useState(false)

  useEffect(()=>{
    const onScroll=()=>{
     if( window.scrollY > 50){
      setScroll(true)
     }else{
      setScroll(false)
     }
    }
    window.addEventListener('scroll',onScroll);

    return ()=> window.removeEventListener('scroll',onScroll)

  },[scroll])

  const onUpdateActiveLink=(value)=>{
    setActive(value)
  }


    return ( 
        <NavBs bg="dark" expand="lg" className='sticky-top'>
        <Container fluid>
          <NavBs.Brand href="#home"><img src={logo} width='50px' style={{borderRadius:"50%"}}/></NavBs.Brand>
          <NavBs.Toggle aria-controls="basic-navbar-nav" />
          <NavBs.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-5" >
              <Nav.Link href="#home" className={active === 'home' ? 'active navbar-link text-light' : 'navbar-link text-light'}
              onClick={()=> onUpdateActiveLink('home')}
              >
              Home
              </Nav.Link>
              <Nav.Link href="#about" className={active === 'about' ? 'active navbar-link' : 'navbar-link text-light'}
              onClick={()=> onUpdateActiveLink('about')}
              >About Me
              </Nav.Link>
              <Nav.Link href="#portfolio" className={active === 'portfolio' ? 'active navbar-link' : 'navbar-link text-light'}
              onClick={()=> onUpdateActiveLink('portfolio')}
              >Project
              </Nav.Link>
            </Nav>
            <span className='navbar-text'  >
            <div className='social-icon'>
              <a href="https://linkedin.com/in/yugesh-kk-48845521b"><img src={navicon1} /></a>
             <a href="https://twitter.com/YKK_006?t=lmkvufU0P9OlydBtNLZQhA&s=09"><img src={navicon2} /></a>
             <a href="https://www.reddit.com/u/_Y_K_K_?utm_medium=android_app&utm_source=share"><img src={navicon3} /></a>
             <a href="https://github.com/YugeshKK/"><img src={git} /></a>
            </div>
            </span>
          </NavBs.Collapse>
        </Container>
      </NavBs>
     );
}
 
export default Navbar;