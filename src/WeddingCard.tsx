import React from 'react';
import { Card } from 'react-bootstrap';

interface IWeddingCardCardProps
{
    imgSrc?: string,
    title: string,
    links?: ILink[],
}

interface ILink 
{
    label: string,
    href: string,
}

const WeddingCard: React.FC<IWeddingCardCardProps> = ({
    imgSrc, title, links, children
}) => {
    return (
        <Card>
            {
                imgSrc &&
                    <Card.Img
                        variant="top"
                        src={imgSrc}
                    />
            }

            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{children}</Card.Text>
                {
                    links?.map((link, index) => (
                        <Card.Link href={link.href} key={index} target="_blank">
                            {link.label}
                        </Card.Link>
                    ))
                }
            </Card.Body>
        </Card>
    )
};

export default WeddingCard;