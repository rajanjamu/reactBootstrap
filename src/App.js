import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={8} lg={6} xl={5} className="px-0" style={{backgroundColor: "#EEA47F"}}>
        <NavigationBar/>
        <Login/>
        </Col>
        </Row>
        </Container>
    </div>
  );
}

export default App;
