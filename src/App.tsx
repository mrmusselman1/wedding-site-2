import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import IndexHeader from 'components/Headers/IndexHeader';
import WeddingCard from 'WeddingCard';
import DefaultFooter from 'components/Footers/DefaultFooter';

function App() {

    const date = 'May 21, 2022';
    const time = '1:00 PM';

    const calculateTimeLeft = () => {
        let difference = +new Date(`${date} ${time}`) - +new Date();
        if (difference <= 0) {
            return "Today's the Day!"
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        let timeString = '';
        if (days > 0) {
            let dayLabel = days !== 0 ? 'days' : 'day';
            timeString += `${days} ${dayLabel} `;
        }
        if (hours > 0) {
            let hourLabel = hours !== 0 ? 'hours' : 'hour';
            timeString += `${hours} ${hourLabel} `;
        }
        if (minutes > 0) {
            let minuteLabel = minutes !== 0 ? 'minutes' : 'minute';
            timeString += `${minutes} ${minuteLabel} `;
        }
        if (seconds > 0) {
            let secondsLabel = seconds !== 0 ? 'seconds' : 'second';
            timeString += `${seconds} ${secondsLabel}`;
        }

        return timeString;
    }

    const [timeLeft, setTimeLeft] = useState<string>(calculateTimeLeft());
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className="wrapper">
            <IndexHeader
                date={date}
                countdown={timeLeft}
            />
            <Container>
                <Row id="topRow">
                    <Col md="12" lg="4">
                        <WeddingCard
                            title="The Ceremony"
                            imgSrc="https://centconllc.com/wp-content/uploads/2021/05/TD-PHOTO-01301-small.jpg"
                            links={[{
                                label: "Get Directions",
                                href: "https://goo.gl/maps/MvcMADHcQxgCj9Az6"
                            }]}
                        >
                            The Ceremony will be held at Daybreak Church in Mechanicsburg.
                        </WeddingCard>
                    </Col>
                    <Col md="12" lg="4">
                        <WeddingCard
                            title="The Reception"
                            imgSrc="https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,h_1200,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/harrisburg/MBG-building-pic_9600AC96-9690-445F-B7464BBC94521921_38d86230-3a7e-4c0e-90e8839937c6c7a3.jpg"
                            links={[{
                                label: "Get Directions",
                                href: "https://g.page/ABCMechanicsburg?share"
                            }]}
                        >
                            We'll share a meal and a pint at Appalachian Brewing Company
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
                            We've reserved a block of rooms at the Courtyard Meriott for those traveling.
                            Please make sure you've booked your room by May 1, 2022.
                        </WeddingCard>
                    </Col>
                </Row>
                <Row>
                    <Col md="12" lg="2" />
                    <Col md="12" lg="4">
                        <WeddingCard
                            title="Registry"
                            links={[
                                {
                                    label: "Amazon",
                                    href: ""
                                },
                                {
                                    label: "Zillow",
                                    href: "https://www.zillow.com/long-beach-island-nj/"
                                },
                            ]}
                        >
                            If you're so inclined...
                        </WeddingCard>
                    </Col>
                    <Col md="12" lg="4">
                        <WeddingCard title="Address">
                            Somehow we'll give you our new address?
                        </WeddingCard>
                    </Col>
                    <Col md="12" lg="2" />
                </Row>
                <Row>

                <blockquote className="blockquote text-center">
                    <p className="mb-0">
                        And after you have suffered a little while, the God of all grace, who has called you to his eternal glory in Christ, will himself restore, confirm, strengthen, and establish you.
                    </p>
                    <footer className="blockquote-footer">
                        <cite title="Source Title">1 Peter 5:10 (ESV)</cite>
                    </footer>
                    </blockquote>
                </Row>

            </Container>
            <DefaultFooter />
        </div>
    );
}

export default App;
