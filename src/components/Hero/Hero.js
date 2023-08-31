import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import s from './Hero.module.css';
import slide2 from './b9c64a23.png';

function Hero() {
  return (
    <div className={s.Container}>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        width={800}
        transitionTime={1000}
      >
        <div className={s.Slide}>
          <img src={slide2} alt="Slide 1" />
        </div>
        <div className={s.Slide}>
          <img src={slide2} alt="Slide 1" />
        </div>
        <div className={s.Slide}>
          <img src={slide2} alt="Slide 1" />
        </div>
      </Carousel>
    </div>
  );
}
export default Hero;
