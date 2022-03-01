import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex align-items-center min-vh-100">
      <Container fluid>
          <Row>
            <p>This is the new site!</p>
            <p>We're getting married!</p>
            <p>Saturday, May 21, 2022</p>
          </Row>
          <Row className="align-items-center">
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://centconllc.com/wp-content/uploads/2021/05/TD-PHOTO-01301-small.jpg" />
                <Card.Body>
                  <Card.Title>The Ceremony</Card.Title>
                  <Card.Text>
                    The Ceremony will be held at Daybreak Church in Mechanicsburg.
                  </Card.Text>
                  <Card.Link href="https://goo.gl/maps/MvcMADHcQxgCj9Az6">
                    Get Directions
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
              <Card.Img
                  variant="top"
                  src="https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,h_1200,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/harrisburg/MBG-building-pic_9600AC96-9690-445F-B7464BBC94521921_38d86230-3a7e-4c0e-90e8839937c6c7a3.jpg" />
                <Card.Body>
                  <Card.Title>The Reception</Card.Title>
                  <Card.Text>
                    We'll share a meal and a pint at Appalachain Brewing Company
                  </Card.Text>
                  <Card.Link>
                    Get Directions
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
              <Card.Img
                  variant="top"
                  src="https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/http://www.cfmedia.vfmleonardo.com/imageRepo/6/0/95/961/13/harwm-exterior-0073-hor-clsc_O/Courtyard-Harrisburg-West-Mechanicsburg-Exterior.jpg?tr=w-780%2Ch-437%2Cfo-auto" />
                <Card.Body>
                  <Card.Title>Lodging</Card.Title>
                  <Card.Text>
                    We've booked a block of rooms at the Meriot for those traveling.
                    Please make sure you've booked your room by May 1, 2022.
                  </Card.Text>
                  <Card.Link>
                    Get Directions
                  </Card.Link>
                  <Card.Link>
                    Book a Room
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </Container>
    </div>

  );
}

export default App;
