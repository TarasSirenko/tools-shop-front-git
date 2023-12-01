import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import s from './Hero.module.css';
import slide1 from '../../img/tool_dm_man.png';
import slide2 from '../../img/instrument-hero.jpg';
import slide3 from './b9c64a23.png';

function Hero() {
  return (
    <div className={s.Container}>
      <Carousel
        className={s.Container}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        width={1600}
        transitionTime={1000}
      >
        <div className={s.Slide}>
          <img src={slide1} alt="Slide 1" className={s.Image} />
        </div>
        <div className={s.Slide}>
          <img src={slide2} alt="Slide 1" className={s.Image} />
        </div>
        <div className={s.Slide}>
          <img src={slide3} alt="Slide 1" className={s.Image} />
        </div>
      </Carousel>
    </div>
  );
}
export default Hero;
