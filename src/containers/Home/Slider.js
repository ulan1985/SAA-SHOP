import { Carousel } from 'react-bootstrap';
import React from 'react';

const Slider = () => {
    return (
        <div class="slider">
            <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F42506724%2F146141046190%2F1%2Foriginal.jpg?s=25245761d54717e7782a672947db97d6"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.desktopbackground.org/p/2015/03/21/920506_download-wallpapers-3840x2160-girls-work-office-monitors_3840x2160_h.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.desktopbackground.org/p/2015/03/21/920506_download-wallpapers-3840x2160-girls-work-office-monitors_3840x2160_h.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Slider;
