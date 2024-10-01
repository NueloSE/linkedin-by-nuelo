import React from 'react';
import Sidebar from './Sidebar';
import Middle from './Middle';
import Rightbar from './Rightbar';
import { Grid } from '@mui/material'

function Home({userData}) {
  return (
    <div style={{padding:'20px', backgroundColor:"#F3F3F3", height:"100vh"}}>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Sidebar userData={userData}/>
        </Grid>

        <Grid item xs={6}>
          <Middle userData={userData}/>
        </Grid>

        <Grid item xs={3}>
          <Rightbar />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
