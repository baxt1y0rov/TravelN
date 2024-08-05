import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import {Box, Image, Paper,Title } from '@mantine/core';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

import './index.css'

import Bukhara from '../assets/bukhara.png'
import Ferghana from '../assets/ferghana.png'
import Tashkent from '../assets/tashkent.png'
import Samarkand from '../assets/samarkand.png'
import Jizzakh from '../assets/jizzakh.png'
import Kokand from '../assets/kokand.png'
import Andijan from '../assets/andijan.png'

const images = [
  Bukhara,
  Ferghana,
  Tashkent,
  Samarkand,
  Jizzakh,
  Kokand,
  Andijan
];

export default function Karusel() {
  const slides = images.map((url) => (
    <Carousel.Slide className='ImgCont' key={url}>
      <Image className='CarouselImage' src={url} />
    </Carousel.Slide>
    
  ));
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Box className='bigcontainer' >
    <Title ta='center'order={3} className='title'>More to Explore</Title>
    <Carousel 
      className='container'
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'md' }}
      loop
      withControls={false}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      {slides}
    </Carousel>
    </Box>
  );
}