import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core';


const Block = (props) => {
    const { item } = props;
    const imgArr = item.images

    const randomImg = imgArr[Math.floor(Math.random() * imgArr.length)]; //Get random image from image array

    return (

            <Grid item xs={12} sm={6}>
                <Card className="slider_block" style={{ position: 'relative' }}>
                    <CardMedia component="img" alt={item.title}
                        height="250"
                        image={randomImg}
                        title={item.title}
                    />
                    <CardContent style={{
                        position: 'absolute', top: '20px',
                        left: '20px',
                        color: '#fff',
                    }}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.title}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
    )
}
export default Block;