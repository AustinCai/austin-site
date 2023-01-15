import React from 'react';
import { Stack } from '@mui/material'
import headshot from './images/austin_headshot.jpeg'
import { Footer } from './Footer';

function App() {
  const imageHeight = 150

  return (
    <Stack height='95vh' m={2} flexDirection="column" justifyContent="space-between">
      <Stack className='homepage-content' flexDirection="row" justifyContent="space-between">
        <Stack>
          <h1>Hi, I'm Austin!</h1>
          <p>Welcome to my website!</p>
        </Stack>
        <Stack>
          <img src={headshot} alt={"Headshot of Austin"} style={{width: imageHeight, height: imageHeight, borderRadius: imageHeight/2}}></img>
        </Stack>
      </Stack>
      <Footer/>
    </Stack>
  );
}

export default App;
