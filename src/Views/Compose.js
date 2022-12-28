import React from 'react';
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';

export default function Compose(){
    return(

        <Card style={{maxWidth:400, margin:"0 auto", padding:"20px 30px"}}>
            <CardContent>
                <Typography gutterBottom variant="h5">Compose Email</Typography>
                <Typography gutterBottom color="textSecondary" variant="body2" component="p">Please Fill up the form!</Typography>
                <form>
                <Grid container sapcing={1}>

                    <Grid xs={10}  item>
                     <TextField  label="Full Name" placeholder="Enter full name" variant="filled" fullWidth required/>                        
                    </Grid>
                    <Grid  xs={10}  item>
                     <TextField type="email"  label="Email" placeholder=" Enter email" variant="filled" fullWidth required/>                        
                    </Grid>
                    <Grid xs={10}  item>
                     <TextField type="number"  label="Phone" placeholder=" Enter phone number" variant="filled" fullWidth required/>                        
                    </Grid>
                    <Grid xs={10}   item>
                     <TextField   label="Message" multiline rows={4} placeholder=" Enter your message" variant="filled" fullWidth required/>                        
                    </Grid>
                    <Grid xs={10}  item>
                      <Button type="submit" variant="contained" color="primary" fullWidth>Send</Button>  
                    </Grid>
                </Grid>
                </form>
            </CardContent>
        </Card>
    )
}