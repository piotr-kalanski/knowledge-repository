import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import BookIcon from '@material-ui/icons/Book';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
  }
});

const LearningItemCard = (props: any) => {
    const classes = useStyles();

    return (
    <Card className={classes.card}>
        <Grid container spacing={2}>
            <Grid item>
                <img
                    alt=""
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAADFBMVEX////g4ODw8PD39/dRpSqjAAAAVUlEQVR4nO3YsQ0AMAjAMAr//9wHKjGCVPuCzIkAAAAAAAAAAACAz1S2ajQwTysFChQoUKBAgQIFChQoUKBAgQIFChQoUODL+gUMAAAAAAAAAAAAAy53NQWhnTvI2wAAAABJRU5ErkJggg=="
                />

            </Grid>
            <Grid item sm={9} xs={12}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        <BookIcon />
                        Learning item title
                    </Typography>
                    <Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <span style={{color: "#ffc107"}}>&#9733; &#9733; &#9733; &#9733; &#9734;</span>        
                            </Grid>
                            <Grid item xs={4}>
                                <Chip label="Completed" clickable color="primary" size="small" icon={ <DoneIcon /> } />
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="contained" color="primary" size="small">Plan</Button>
                            </Grid>
                        </Grid>
                    </Typography>
                    <Typography variant="body2" component="p">
                    Lorem ipsum description
                    </Typography>
                    <Typography>
                        <Chip label="Tag1" component="a" href="#chip" clickable color="primary" size="small" style={{marginRight: 5}} />
                        <Chip label="Tag2" component="a" href="#chip" clickable color="primary" size="small" style={{marginRight: 5}} />
                        <Chip label="Tag3" component="a" href="#chip" clickable color="primary" size="small" style={{marginRight: 5}} />
                    </Typography>
                </CardContent>
            </Grid>    
        </Grid>
    </Card>
    );
};

export default LearningItemCard;