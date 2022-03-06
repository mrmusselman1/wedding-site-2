import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import IndexHeader from 'components/Headers/IndexHeader';
import WeddingCard from 'WeddingCard';
import DefaultFooter from 'components/Footers/DefaultFooter';
import Photos from 'Photos';
import Countdown from 'Countdown';

/*
 * @todo TODO:
 * - for our friends far away, we plan to come visit you soon
 *
 */

function App() {

    const date = 'May 21, 2022';
    const time = '1:00 PM';

    return (
        <div className="wrapper">
                {
                    /*
                     * Main Image Header, Countdown
                     */
                }
            <IndexHeader
                date={date}
                countdown={
                    <Countdown
                        date={date}
                        time={time}
                    />
                }
            />
            <Container>
                {
                    /*
                     * Ceremony, Reception, Accomodations
                     */
                }
                <Row id="topRow">
                    <Col md="12" lg="4">
                        <WeddingCard
                            title="The Ceremony"
                            imgSrc="https://centconllc.com/wp-content/uploads/2021/05/TD-PHOTO-01301-small.jpg"
                            links={[
                                {
                                    label: "Get Directions",
                                    href: "https://goo.gl/maps/MvcMADHcQxgCj9Az6"
                                },
                                {
                                    label: "View Live Stream",
                                    href: "http://live.db.church"
                                }
                            ]}
                        >
                            The Ceremony will be held at Daybreak Church in Mechanicsburg. For those unable to join us in person, the ceremony will be live streamed.
                        </WeddingCard>
                    </Col>
                    <Col md="12" lg="4">
                        <WeddingCard
                            title="The Reception"
                            imgSrc="https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,h_1200,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/harrisburg/MBG-building-pic_9600AC96-9690-445F-B7464BBC94521921_38d86230-3a7e-4c0e-90e8839937c6c7a3.jpg"
                            links={[
                                {
                                    label: "Get Directions",
                                    href: "https://g.page/ABCMechanicsburg?share"
                                }
                            ]}
                        >
                            After the ceremony, we'll share pint at Appalachian Brewing Company. Buffet style bar food, beer, and wine will be served.
                        </WeddingCard>
                    </Col>
                    <Col md="12" lg="4">
                        <WeddingCard
                            title="Accomodations"
                            imgSrc="https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/http://www.cfmedia.vfmleonardo.com/imageRepo/6/0/95/961/13/harwm-exterior-0073-hor-clsc_O/Courtyard-Harrisburg-West-Mechanicsburg-Exterior.jpg?tr=w-780%2Ch-437%2Cfo-auto"
                            links={[
                                {
                                    label: "Get Directions",
                                    href: "https://goo.gl/maps/SZFvNGbcuz9rQDn59"
                                },
                                {
                                    label: "Book a Room",
                                    href: "https://www.marriott.com/event-reservations/reservation-link.mi?id=1646065327858&key=GRP&app=resvlink"
                                },
                            ]}
                        >
                            We've reserved a block of rooms at the Courtyard Marriott for those traveling.
                            Please make sure you've booked your room by <em>May 1, 2022</em>.
                        </WeddingCard>
                    </Col>
                </Row>

                {
                    /*
                     * Registry, Address
                     */
                }
                <Row>
                    <Col md="12" lg="2" />
                    <Col md="6" lg="4">
                        <WeddingCard
                            title="Registry"
                            links={[
                                {
                                    label: "Amazon",
                                    href: "https://www.amazon.com/wedding/share/musselman-smith"
                                },
                            ]}
                        >
                            If you're so inclined, we've registed at Amazon.
                        </WeddingCard>
                    </Col>
                    <Col md="6" lg="4">
                        <WeddingCard title="Address">
                            Somehow we'll give you our new address. We haven't quite figured that out yet.
                        </WeddingCard>
                    </Col>
                    <Col md="12" lg="2" />
                </Row>

                {
                    /*
                     * Photos
                     */
                }
                <Row>
                    <Col md={0} lg={1} />
                    <Col md={12} lg={10}>
                        <Photos
                            photos={[
                                '/photos/MR-14.jpeg',
                                '/photos/MR-6.jpeg',
                                '/photos/MR-18.jpeg',
                                '/photos/MR.jpeg',
                            ]}
                        />
                    </Col>
                    <Col md={0} lg={1} />
                </Row>

                {
                    /*
                     * Attribution
                     */
                }
                <Row>
                    <Col className="text-center">
                        <p className="small">
                            Photos by <a href="https://www.facebook.com/irislensphotography/" target="_blank">Iris Lens Photography</a>
                        </p>
                    </Col>
                </Row>


                {
                    /*
                     * Spacer
                     */
                }
                <Row>
                    <Col>
                        &nbsp;
                    </Col>
                </Row>

                {
                    /*
                     * Bible Verse
                     */
                }
                <Row>
                    <blockquote className="blockquote text-center">
                        <p className="mb-0">
                            Two people are better off than one, for they can help each other succeed.
                            If one person falls, the other can reach out and help.
                        </p>
                        <footer className="blockquote-footer">
                            <cite title="Source Title">Ecclesiastes 4:9-10 (NLT)</cite>
                        </footer>
                    </blockquote>
                </Row>

            </Container>
            <DefaultFooter />
        </div>
    );
}

export default App;
