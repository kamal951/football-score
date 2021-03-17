import { RouteComponentProps } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useEffect, useState } from 'react';
import { getMatchDetail } from '../api';
import { ImageTeam } from './ImageTeam';
import { useHistory } from "react-router-dom";
import moment from 'moment';
import { Score } from './Score';

export interface TParams extends RouteComponentProps<{ matchId: string }> { }

const useStyles = makeStyles((theme) => ({
	root: {
		marginLeft: "80px",
		marginRight: "80px"
	},
	header: {
		flexGrow: 1,
		display: "flex",
		alignItems: "center",
		backgroundColor: "#fafafa"
	},
	menuButton: {
		marginRight: theme.spacing(2),
		color: "gray"
	},
	textColor: {
		color: "grey"
	},
	title: {
		display: "inline-flex",
		alignItems: "center"
	},
	content: {

	}
}));

export const MatchDetail: React.FC<TParams> = props => {
	const classes = useStyles();
	const [matchDetail, setMatchDetail] = useState(Object);
	let history = useHistory();

	useEffect(() => {
		getMatchDetail(props.match.params.matchId).then((response) => {
			console.log(response.data)
			setMatchDetail(response.data)
		})
	}, [props.match.params.matchId])

	const getDetail = () => {
		if (matchDetail.match !== undefined) {
			return (
				<div className={classes.content}>
					<div className={classes.title}>
						<ImageTeam teamId={matchDetail.match.homeTeam.id} />
						<Score homeScore={matchDetail.match.score.fullTime.homeTeam} awayScore={matchDetail.match.score.fullTime.awayTeam} />
						<ImageTeam teamId={matchDetail.match.awayTeam.id} />
					</div>
					<Typography style={{marginTop: "20px"}}>{moment(matchDetail.match.utcDate).format("DD/MM/YYYY à HH:mm")}</Typography>
					<Typography>Stade : {matchDetail.match.venue}</Typography>
				</div>
			)
		}
	}

	const goBack = () => {
		history.goBack()
	}

	return (
		<div className={classes.root}>
			<div className={classes.header}>
				<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => { goBack() }}>
					<ArrowBackIcon />
				</IconButton>
				<Typography variant="h6" className={classes.textColor}>
					Détail du match
          		</Typography>
			</div>
			<div className={classes.title}>
				{getDetail()}
			</div>
		</div>
	)
}