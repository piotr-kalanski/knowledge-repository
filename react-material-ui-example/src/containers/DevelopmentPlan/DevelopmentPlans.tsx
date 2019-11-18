import React, { Fragment } from 'react';
import DevelopmentPlanCard from '../../components/DevelopmentPlan/DevelopmentPlanCard';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const DevelopmentPlans = () => {

    return (
        <Fragment>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/">
                    Home
                </Link>
                <Link color="inherit" href="/getting-started/installation/">
                    Core
                </Link>
                <Typography color="textPrimary">Breadcrumb</Typography>
            </Breadcrumbs>
            <DevelopmentPlanCard />
            <DevelopmentPlanCard />
        </Fragment>  
    );
}
 
export default DevelopmentPlans;