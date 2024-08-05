import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Text, Transition, rem } from '@mantine/core';
import "./index.css"

export default function Affiks() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix className='Affix'position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              color='#fcb30c'
              className='button'
              radius={'xl'}
              style={{transitionStyles,borderWidth:2,borderColor:'white'}}
              onClick={() => scrollTo({ y: 0 })}
            >
            <IconArrowUp style={{ width: rem(16), height: rem(16) }} />
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}