import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SvgIcon from '@material-ui/core/SvgIcon';
import PL from '../images/Premier_League_Logo.svg'
import CL from '../images/Champions_League_Logo.svg'
import BL from '../images/Bundesliga_Logo.svg'
import LL from '../images/La_Liga_Logo.svg'
import SA from '../images/Serie_A_Logo.svg'
import L1 from '../images/Ligue_1_Logo.svg'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		color: "#FF5555"
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
}));

const CustomLink = styled(Link)`
    &:focus, &:hover, &:visited, &:link, &:active {
		color: black;
        text-decoration: none;
    }
`
const CustomLinkTitle = styled(Link)`
    &:focus, &:hover, &:visited, &:link, &:active {
		color: white;
        text-decoration: none;
    }
`

export const Header = () => {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				style={{ background: '#3700B3' }}
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
					<CustomLinkTitle to="/">
						<Typography variant="h6" noWrap>
							Football Score
          				</Typography>
					</CustomLinkTitle>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</div>
				<Divider />
				<List>
					<ListItem component={CustomLink} to="/PL" onClick={handleDrawerClose}>
						<ListItemIcon><SvgIcon /><img src={PL} style={{ marginLeft: "-30px", marginRight: "20px" }} alt="pl" width="60" /></ListItemIcon>
						<ListItemText primary="Premier League" />
					</ListItem>
					<ListItem component={CustomLink} to="/BL1" onClick={handleDrawerClose}>
						<ListItemIcon><SvgIcon /><img src={BL} style={{ marginLeft: "-30px", marginRight: "20px" }} alt="bl" width="60" height="40" /></ListItemIcon>
						<ListItemText primary="Bundesliga" />
					</ListItem>
					<ListItem component={CustomLink} to="/FL1" onClick={handleDrawerClose}>
						<ListItemIcon><SvgIcon /><img src={L1} style={{ marginLeft: "-30px", marginRight: "20px" }} alt="bl" width="60" height="40" /></ListItemIcon>
						<ListItemText primary="Ligue 1" />
					</ListItem>
					<ListItem component={CustomLink} to="/PD" onClick={handleDrawerClose}>
						<ListItemIcon><SvgIcon /><img src={LL} style={{ marginLeft: "-30px", marginRight: "20px" }} alt="bl" width="60" height="40" /></ListItemIcon>
						<ListItemText primary="La Liga" />
					</ListItem>
					<ListItem component={CustomLink} to="/SA" onClick={handleDrawerClose}>
						<ListItemIcon><SvgIcon /><img src={SA} style={{ marginLeft: "-30px", marginRight: "20px" }} alt="bl" width="60" height="40" /></ListItemIcon>
						<ListItemText primary="Serie A" />
					</ListItem>
					<ListItem component={CustomLink} to="/CL" onClick={handleDrawerClose}>
						<ListItemIcon><SvgIcon /><img src={CL} style={{ marginLeft: "-30px", marginRight: "20px" }} alt="bl" width="60" height="40" /></ListItemIcon>
						<ListItemText primary="Champions League" />
					</ListItem>
				</List>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}
			>
				<div className={classes.drawerHeader} />
			</main>
		</div>
	);
}
