import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Button, Paper, Title, useMantineTheme, Text } from '@mantine/core';
import classes from './Demo.module.css';
import '@mantine/carousel/styles.css';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

import Bukhara from '../assets/bukhara2.png'
import Ferghana from '../assets/ferghana2.png'
import Tashkent from '../assets/tashkent2.png'
import Samarkand from '../assets/samarkand2.png'
import Jizzakh from '../assets/jizzakh2.png'
import Kokand from '../assets/kokand2.png'
import Andijan from '../assets/andijan2.png'

const data = [
  {
    image:
      Ferghana,
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      Kokand,
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  },
  {
    image:
      Samarkand,
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },
  {
    image:
      Tashkent,
    title: 'Aurora in Norway: when to visit for best experience',
    category: 'nature',
  },
  {
    image:
      Jizzakh,
    title: 'Best places to visit this winter',
    category: 'tourism',
  },
  {
    image:
      Andijan,
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'nature',
  },
];



function Card({ image, title, category }) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}

export default function Demo() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}  >
      <Card {...item} />
    </Carousel.Slide>
  ));
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Carousel
      controlSize={30}
      controlsOffset="xl"
      withindicator plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: 'xl', sm: 2 }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
      loop
    >
      {slides}
    </Carousel>
  );
}