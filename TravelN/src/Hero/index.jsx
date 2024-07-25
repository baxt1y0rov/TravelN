import { Title, Text, Button, Container,Image } from '@mantine/core';
import classes from './HeroText.module.css';
import { Center } from '@mantine/core';


export default function HeroText() {
  return (
    <Container className={classes.wrapper} size={1400}>

      <div className={classes.inner} style={{marginBottom:60}}>
        <Container style={{marginTop:40,marginBottom:40}} p={0} size={600}>
          <Text size="lg" c="dimmed"  ta="center"className={classes.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum soluta ipsum provident corporis et est sapiente, blanditiis temporibus aspernatur, odit sed, esse hic sequi doloremque qui! Reprehenderit, neque numquam.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} style={{margin:10}}size="lg" variant="default" color="gray">
            About Us
          </Button>
          <Button className={classes.control} style={{margin:10}}size="lg">
            TRAVEL
          </Button>
        </div>
      </div>
    </Container>
  );
}