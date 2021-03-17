import React from 'react';
import { LeagueStanding } from './LeagueStanding';
import { LeagueMatches } from './LeagueMatches';
import { LeagueImage } from './LeagueImage';
import { Box, makeStyles, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { competList } from './MyTypes';

interface Props { league: competList }

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: "80px",
        marginRight: "80px",
        paddingTop: "30px"
    },
}))

function TabPanel(props: any) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export const LeagueContainer = (props: Props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root} elevation={3}>
            <LeagueImage league={props.league} />
            <AppBar position="static" color="inherit" >
                <Tabs value={value} onChange={handleChange} aria-label="tabs competition" indicatorColor="primary">
                    <Tab label="Matches" {...a11yProps(0)} />
                    <Tab label="Classement" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <LeagueMatches league={props.league} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <LeagueStanding league={props.league} />
            </TabPanel>
        </Paper>
    )
}