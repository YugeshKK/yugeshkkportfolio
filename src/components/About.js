import { Container,Col,Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'


const About = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    return ( 
       <section className='skill' id='about'>
        <Container fluid>
            <Row>
                <Col>
                    <div className='skill-bx'>
                        <h2>
                            About
                        </h2>
                        <p style={{lineHeight: "1.6"}}>I am a Computer Science graduate.<br/> I graduated in the year 2022 from  
                         <i> Jawaharlal Nehru National College of Engineering shimogga</i>.<br/> I live in Bhadravathi, Karnataka.<br/>
                        I Believe that Connecting with people and exchanging our thoughts and ideas will play a great deal in personal as well as professional development.
                        Especially through Internet we can connect with millions if not billions of people.
                        Then I started to learn Front End Devleopment, mainly I use React JS as my front end tool. I've been working with React for more than a year
                        now, I have Built a few Projects which I have listed below. I look forward to work with large projects and learn a lot and Excell myself as a Front End Developer.
                        </p>
                        <h1>Skills</h1>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className="item">
                                <img src={meter1} alt='image'/>
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt='image'/>
                                <h5>Bootstrap 5</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt='image ' />
                                <h5>Html and CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt='image'/>
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt='image'/>
                                <h5>Fluent in 5 Languages</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
  
       </section>
     );
}
 
export default About;