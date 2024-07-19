import { useState } from 'react'
import './App.css'
import HeaderSearch from './Header/'
import HeroContentLeft from './Components/Hero'
import FaqSimple from './Components/Aboutus'
// import Card from './Components/Recommendations'
import { createTheme, MantineProvider } from '@mantine/core';
import { ColorSchemeScript } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/code-highlight/styles.css';

const theme = createTheme({
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
});


function App() {

  return (
    <MantineProvider defaultColorScheme="light">
      <HeaderSearch />
      <HeroContentLeft/>
      <FaqSimple/>
    </MantineProvider>
  )
}
export default App
