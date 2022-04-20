import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../assets/2.png';
import image2 from '../../assets/3.png';
import image3 from '../../assets/4.png';
import './CarouselContainer.css';

const CarouselContainer = () => {
    return (
        <>
            <Carousel class="Container">
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={image1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={image2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={image3}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselContainer;