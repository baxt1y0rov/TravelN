
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Image } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import './index.css'

const images = [
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
];

export default function Karusel() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel withindicator plugins={[autoplay.current]}
    sx={{maxWidth:320}} mx="auto"
    slideSize="100%" height={200} loop withControls={false}>
      <Image className='CarouselImage' src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png' />
      <Image className='CarouselImage' src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png' />
      <Image className='CarouselImage' src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png' />
      <Image className='CarouselImage' src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png' />
      <Image className='CarouselImage' src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png' />
      <Image className='CarouselImage' src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png' />
      <Image className='CarouselImage' src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png' />
      <Image className='CarouselImage' src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png' />
    </Carousel>
  );
}