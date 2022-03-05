import { Carousel } from "react-bootstrap";

interface IPhotosProps 
{
    // photos: IPhoto[],
    photos: string[],
}

// interface IPhoto {
//     src: string,
//     header: string,
//     caption: string,
// }

const Photos: React.FC<IPhotosProps> = ({
    photos
}) =>
{
    const slides = photos.map((photo, index) => (
        <Carousel.Item key={index}>
            <img
                className="d-block w-100"
                src={photo}
                // alt={photo.header}
            />
            {/* <Carousel.Caption>
                <h3>{photo.header}</h3>
                <p>{photo.caption}</p>
            </Carousel.Caption> */}
        </Carousel.Item>
    ));

    return (
        <Carousel>
            { slides }
        </Carousel>
    );
};

export default Photos;