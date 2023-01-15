import React from 'react';
import { Stack } from '@mui/material'
import headshot from './images/austin_headshot.jpeg'

function App() {
  return (
    <Stack m={2} flexDirection="row" justifyContent="space-between">
      <Stack>
        <h1>Hi, I'm Austin!</h1>
        <p>Welcome to my website!</p>
      </Stack>
      <Stack>
        <img src={headshot} alt={"Headshot of Austin"} style={{width: 200, height: 200, borderRadius: 100}}></img>
      </Stack>
    </Stack>
  );
}

export default App;
