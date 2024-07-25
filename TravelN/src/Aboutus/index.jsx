import { Container, Title, Accordion, Center, Divider } from '@mantine/core';
import classes from './FaqSimple.module.css';


const placeholder =
  '';

export default function FaqSimple() {
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title ta="center" style={{margin:50}}className={classes.title}>
        About Us
      </Title>
        <Accordion variant="separated">
          <Accordion.Item className={classes.item} value="reset-password">
            <Accordion.Control>lorem</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="another-account">
            <Accordion.Control>lorem</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="newsletter">
            <Accordion.Control>lorem</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="credit-card">
            <Accordion.Control>lorem</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="payment">
            <Accordion.Control>lorem</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
    </Container>  
    
  );
}