import { Col, Container, Row } from 'react-bootstrap';
import headerimg from '../assets/img/header-img.svg'
import Typed from 'react-typed'


const Header = () => {
   
    return ( 
     <section className='banner' id='home'>
        <Container fluid>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}  >
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Yugesh K.K `}<br/>
                    <span className='tagline'> Front End Web Developer</span>
                    </h1>   
                <Typed className='typed'
                    strings={['Front End Developer','Rect Js']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                >     
                </Typed>
                </Col>

                <Col xs={12} md={6} xl={5} >
                    <img src={headerimg} alt='Header Img' style={{opacity:"0.5"}} className='d-none d-lg-block '/>
                </Col>
            </Row>
        </Container>
     </section>
     );
}
 
export default Header;