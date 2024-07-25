import { useState } from 'react'
import './App.css'
import HeroContentLeft from './Hero'
import FaqSimple from './Aboutus'
// import Card from './Components/Recommendations'
import { createTheme, MantineProvider, Center, Title, Divider, Text  } from '@mantine/core';
import { ColorSchemeScript } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/code-highlight/styles.css';
import HeaderMegaMenu from './Header/'
import GradientSegmentedControl from './Components/Filter'
import InputWithButton from './Components/Searchbar'
import FooterCentered from './Footer'

const theme = createTheme({
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
});

const date = new Date().getFullYear();

function App() {

  return (
    <MantineProvider defaultColorScheme="light">
      <HeaderMegaMenu />
      <Title ta="center"> T R A V E L - N</Title>
      <Center>
        <GradientSegmentedControl/>
      </Center>
      <InputWithButton/>
      <HeroContentLeft/>
      <Divider my="md" />
      <FaqSimple/>
      <Divider my="md" />
      <FooterCentered/>
      <Text c="dimmed" size="sm" ta='center' style={{marginBottom:20}}>
          © {date} travel-n. All rights reserved.
      </Text>
    </MantineProvider>
  )
}
export default App
