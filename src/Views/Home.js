import * as React from 'react';
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';

export default function Home (){
  return(
       
    <Card style={{maxWidth:400, margin:"60px auto", padding:"60px 30px"}}>
    <CardContent>
        <Typography gutterBottom variant="h5">Search Account</Typography>
        <Typography gutterBottom color="textSecondary" variant="body2" component="p">Please enter email!</Typography>
        <form>
        <Grid container spacing={2}>            
            <Grid  xs={18}  item>
             <TextField type="email"  label="Email" placeholder=" Enter email" variant="filled" fullWidth required/>                        
            </Grid>
            <Grid xs={5} item>
              <Button type="submit" variant="contained" color="primary" fullWidth>Send</Button>  
            </Grid>
        </Grid>
        </form>
    </CardContent>
</Card>

);
}