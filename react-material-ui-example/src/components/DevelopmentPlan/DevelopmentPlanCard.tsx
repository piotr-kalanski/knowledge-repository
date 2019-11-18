import React, { Fragment } from 'react';
import { lighten, makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) => createStyles({
        card: {
            marginBottom: 10,
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
        margin: {
            margin: theme.spacing(1),
        },
    }),
);

const BorderLinearProgress = withStyles({
    root: {
      borderRadius: 20,
      height: 10,
      backgroundColor: lighten('#e9ecef', 0.5),
    },
    bar: {
      backgroundColor: '#ffc107',
    },
  })(LinearProgress);

const DevelopmentPlanCard = () => {

        const classes = useStyles();

        return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Development plan title
                    <div style={ {float: "right"} }>
                        <EditIcon color="primary" />
                        <DeleteIcon color="error" />
                    </div>
                </Typography>
                <Grid container spacing={3}>                        
                    <Grid item xs={6}>
                        <Typography className={classes.pos} color="textSecondary">
                            Added 2019-10-12
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <BorderLinearProgress
                            className={classes.margin}
                            variant="determinate"
                            color="secondary"
                            value={50}
                        />
                    </Grid>
                </Grid>
                <Typography variant="body2" component="p">
                    Lorem ipsum description
                </Typography>
                <Typography>
                    <Chip label="Tag1" component="a" href="#chip" clickable color="primary" size="small" style={{marginRight: 5}} />
                    <Chip label="Tag2" component="a" href="#chip" clickable color="primary" size="small" style={{marginRight: 5}} />
                    <Chip label="Tag3" component="a" href="#chip" clickable color="primary" size="small" style={{marginRight: 5}} />
                </Typography>
            </CardContent>
        </Card>
    );
}
 
export default DevelopmentPlanCard;