import React from 'react';
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';

export default function Compose(){
    return(

        <Card style={{maxWidth:400, margin:"2px auto", padding:"60px 30px"}}>
            <CardContent>
                <Typography gutterBottom variant="h5">Compose Email</Typography>
                <Typography gutterBottom color="textSecondary" variant="body2" component="p">Please Fill up the form!</Typography>
                <form>
                <Grid container spacing={2}>

                    
                    <Grid  xs={18}  item>
                     <TextField type="email"  label="Recipient" placeholder=" Enter email" variant="filled" fullWidth required/>                        
                    </Grid>
                    <Grid xs={18}  item>
                     <TextField type="text"  label="Subject" variant="filled" fullWidth required/>                        
                    </Grid>
                    <Grid xs={18}   item>
                     <TextField   label="Message" multiline rows={4} placeholder=" Enter your message" variant="filled" fullWidth required/>                        
                    </Grid>
                    <Grid xs={5} item>
                      <Button type="submit" variant="contained" color="primary" fullWidth>Send</Button>  
                    </Grid>
                </Grid>
                </form>
            </CardContent>
        </Card>
    )
}