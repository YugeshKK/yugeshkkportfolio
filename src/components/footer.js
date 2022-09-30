import { Container, Row ,Col} from "react-bootstrap";
import logo from '../components/ykk_logo.png'
import icons from '../assets/img/mail.svg'
import me from '../assets/img/yuge.jpg'


const Footer = () => {
    return ( 
        <footer className="footer">
        <Container fluid>
          <Row className="align-items-center">
            <Col size={12} sm={6}>
              <img src={logo} alt="Logo" />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
            <img id='me' src={me} style={{minHeight:"50px"}} alt='image'/> 
            </Col>
            <div className="mail">
              <img src={icons} style={{width:"30px"}}  alt='image'/>
              <a> : yugeshkk2001@gmail</a>
              <p>Be a Lannister and send your'e Regards...</p>
              <h5>Yugesh KK (YKK)</h5>
              </div>
          </Row>
        </Container>
      </footer>
     );
}
 
export default Footer;