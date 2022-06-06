import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
// import { Alert } from 'react-bootstrap';
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

    // const liveStreamUrl = "https://www.youtube.com/channel/UC5dwWwlFlFmMf-hPOXdnpyg";

    // const [showAlert, setShowAlert] = useState(true);

    const date = 'May 21, 2022';
    const time = '1:00 PM';
    const timezone = 'GMT-0400'; // Eastern Daylight Time

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
                        timezone={timezone}
                    />
                }
            />
            <Container>
                {
                    /*
                     * Ceremony, Reception, Accomodations
                     */
                }

                {/* <Row id="topRow">
                    <Col lg="2"/>
                    <Col lg="8">
                        {
                            showAlert &&
                                <Alert variant='warning' dismissible onClose={() => setShowAlert(false)}>
                                    <Alert.Heading>Welcome to our Wedding Site!</Alert.Heading>

                                    We are in the process of determing how to live stream our ceremony.
                                    Please check back here for the latest link to the <a href={liveStreamUrl} target="_blank">Live Stream</a>!

                                </Alert>
                        }
                    </Col>
                    <Col lg="2"/>
                </Row> */}

                <Row id="topRow">
                    <Col md="12" lg="3">
                        <WeddingCard
                            title="Virginia Celebration"
                            imgSrc="https://lonelyplanetimages.imgix.net/a/g/hi/t/849f787f68b13ef33024920cc82ad5b0-fredericksburg.jpg?sharp=10&vib=20&w=600"
                            // links={[
                            //     {
                            //         label: "Get Directions",
                            //         href: "https://goo.gl/maps/poVcKKdE8vAjSWe89"
                            //     }
                            // ]}
                        >
                            We will hold a celebration gathering at Rachael's house in Fredericksburg, Virginia.
                            <br />
                            Please contact Rachael for more details.
                        </WeddingCard>
                    </Col>
                    <Col md="12" lg="6">
                        <WeddingCard
                            title="The Ceremony"
                            imgSrc="https://centconllc.com/wp-content/uploads/2021/05/TD-PHOTO-01301-small.jpg"
                            links={[
                                // {
                                //     label: "Get Directions",
                                //     href: "https://goo.gl/maps/MvcMADHcQxgCj9Az6",
                                // },
                                // {
                                //     label: "View Live Stream",
                                //     href: liveStreamUrl,
                                // }
                                {
                                    label: "View Recording",
                                    href: "https://youtu.be/6BJC1ZlIJb4"
                                }
                            ]}
                        >
                            Our Ceremony was held at Daybreak Church in Mechanicsburg.
                            A recording of our ceremony is available on YouTube.
                        </WeddingCard>
                    </Col>
                    <Col md="12" lg="3">
                        <WeddingCard
                            title="New Hampshire Celebration"
                            imgSrc="https://i.pinimg.com/736x/67/2c/26/672c26ea0d2f8b698371250258a05638.jpg"
                            links={[
                                {
                                    label: "Get Directions",
                                    href: "https://goo.gl/maps/poVcKKdE8vAjSWe89"
                                }
                            ]}
                        >
                            We will hold a celebration gathering at Trinity Baptist Chuch in Nashua, New Hampshire.
                            <br />
                            Please contact Lisa for more details.
                        </WeddingCard>
                    </Col>

                    {/* <Col md="12" lg="4">
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
                            After the ceremony, we'll share a pint at Appalachian Brewing Company.
                            Buffet style bar food, beer, and wine will be served, starting at 4pm that afternoon.
                        </WeddingCard>
                    </Col> */}
                    {/* <Col md="12" lg="4">
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
                    </Col> */}
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
                            If you're so inclined, we've registered at Amazon.
                            Since we're combining two households, we already have many household items and do not need many things.
                        </WeddingCard>
                    </Col>
                    <Col md="6" lg="4">
                        <WeddingCard title="Address">
                            We will send everyone our new address shortly after we've acclimated to married life.
                            Please sign our guest book and include your address so that we can update you.
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
