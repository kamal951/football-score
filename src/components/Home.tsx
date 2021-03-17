import PL from '../images/Premier_League_Logo.svg'
import CL from '../images/Champions_League_Logo.svg'
import BL from '../images/Bundesliga_Logo.svg'
import LL from '../images/La_Liga_Logo.svg'
import SA from '../images/Serie_A_Logo.svg'
import L1 from '../images/Ligue_1_Logo.svg'
import { Grid, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { ImageWithCover } from './ImageWithCover'

export const Home = () => {
	return (
		<div style={{justifyContent: "center"}}>
			<Typography variant="h4">Choisissez une compétition : </Typography>
			<Grid container justify="center">
				<Grid item container xs={4} md={3} justify="center" >
					<Link to="/PL">
						<ImageWithCover image={PL} text="Premier League" />
					</Link>
				</Grid>
				<Grid item container xs={6} md={3} justify="center">
					<Link to="/BL1">
						<ImageWithCover  image={BL} text="Bundesliga" />
					</Link>
				</Grid>
				<Grid item container xs={6} md={3} justify="center">
					<Link to="/FL1">
						<ImageWithCover  image={L1} text="Ligue 1" />
					</Link>
				</Grid>
				<Grid item container xs={6} md={3} justify="center">
					<Link to="/PD">
						<ImageWithCover  image={LL} text="La Liga" />
					</Link>
				</Grid>
				<Grid item container xs={6} md={3} justify="center">
					<Link to="/SA">
						<ImageWithCover  image={SA} text="Serie A" />
					</Link>
				</Grid>
				<Grid item container xs={6} md={3} justify="center">
					<Link to="/CL">
						<ImageWithCover  image={CL} text="Champions League" />
					</Link>
				</Grid>
			</Grid>
		</div>
	)
}