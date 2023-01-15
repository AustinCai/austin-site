import React from 'react';
import { createTheme, Link, List, ListItem, Stack, ThemeProvider, Typography } from '@mui/material'
import headshot from './images/austin_headshot.jpeg'
import { Footer } from './Footer';
import Terminal from './fonts/SvBasicManual.ttf';

// TODO: fix fonts
const theme = createTheme({
  typography: {
    fontFamily: 'Terminal, Arial',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Terminal';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Raleway') url(${Terminal}) format("tff")
        }
      `,
    },
  },
});

function App() {
  const imageHeight = 150

  return (
    <ThemeProvider theme={theme}>
      <Stack height='95vh' m={2} flexDirection="column" justifyContent="space-between">
        <Stack className='homepage-content' flexDirection="row" justifyContent="space-between">
          <Stack>
            <Typography variant='h2'>Hi, I'm Austin!</Typography>
            <Typography >Welcome to my website! This is a work in progress, but in the meantime here are some links you might find interesting:</Typography>
            <List>
              <ListItem><Link underline="hover" target="_blank" href="https://austincai.notion.site/Projects-83945388f6ac4b21b5fde4e7b601ebf3"><Typography>Projects</Typography></Link></ListItem>
              <ListItem><Link underline="hover" target="_blank" href="http://austincai.weebly.com/"><Typography>Art</Typography></Link></ListItem>
            </List>
          </Stack>
          <Stack>
            <img src={headshot} alt={"Headshot of Austin"} style={{width: imageHeight, height: imageHeight, borderRadius: imageHeight/2}}></img>
          </Stack>
        </Stack>
        <Footer/>
      </Stack>
    </ThemeProvider>

  );
}

export default App;
