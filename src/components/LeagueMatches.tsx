import React, { useEffect, useState } from 'react';
import { makeStyles, Table, TableBody, TableCell, Typography, TableRow, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { getListMatches } from '../api';
import moment from 'moment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import InfoIcon from '@material-ui/icons/Info';
import { Loading } from './Loading';
import { competList } from './MyTypes';

interface Props { league: competList }

const useStyles = makeStyles((theme) => ({
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
}))

export const LeagueMatches = (props: Props) => {
	const classes = useStyles();
	const [matchesList, setMatchesList] = useState([] as any);
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setIsLoading(true)
		getListMatches(props.league).then((response) => {
			let past = []
			let today = []
			let scheduled = []

			for (var i = 0; i < response.data.matches.length; i++) {
				if ((response.data.matches[i].status === "FINISHED" || response.data.matches[i].status === "AWARDED") &&  moment(response.data.matches[i].utcDate).format("DD-MM-YYYY") !== moment().format("DD-MM-YYYY")) {
					past.push(response.data.matches[i])
				} else if (moment(response.data.matches[i].utcDate).format("DD-MM-YYYY") === moment().format("DD-MM-YYYY")) {
					today.push(response.data.matches[i])
				} else {
					scheduled.push(response.data.matches[i])
				}
			}
			let data = [today, scheduled, past.reverse()]

			setMatchesList(data)
			setIsLoading(false)
		})
	}, [props.league]);


	const displayMatchesAsList = (matches: any[]) => {
		let rows = []
		if (matches !== undefined) {
			if (matches.length !== 0) {
				for (let i = 0; i < matches.length; i++) {
					rows.push(
						<TableRow key={i}>
							{moment(matches[i].utcDate).local().format("DD/MM/YYYY") !== moment().local().format("DD/MM/YYYY") ?
								<TableCell style={{ textAlign: "left" }}>
									<Typography>{moment(matches[i].utcDate).local().format("DD/MM/YYYY HH:mm")}</Typography>
								</TableCell> :
								<TableCell style={{ textAlign: "left" }}>
									<Typography>{moment(matches[i].utcDate).local().format("HH:mm")}</Typography>
								</TableCell>
							}
							<TableCell style={{ textAlign: "right" }}>{matches[i].awayTeam.name}</TableCell>
							<TableCell style={{ textAlign: "center" }}>{matches[i].score.fullTime.awayTeam} - {matches[i].score.fullTime.homeTeam}</TableCell>
							<TableCell style={{ textAlign: "left" }}>{matches[i].homeTeam.name}</TableCell>
							<TableCell style={{ textAlign: "center" }}>
								<Link to={"/matchDetail/" + matches[i].id}>
									<InfoIcon />
								</Link>
							</TableCell>

						</TableRow >
					)
				}
			} else {
				return <TableRow ><TableCell style={{ textAlign: "center" }}><Typography>Pas de match aujourd'hui !</Typography></TableCell></TableRow>
			}
		}
		return rows
	}

	const ListMatches =
		<>
			<Accordion defaultExpanded={true}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={classes.heading}>Aujourd'hui</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Table>
						<TableBody>
							{displayMatchesAsList(matchesList[0])}
						</TableBody>
					</Table>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={classes.heading}>À venir</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Table>
						<TableBody>
							{displayMatchesAsList(matchesList[1])}
						</TableBody>
					</Table>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={classes.heading}>Passé</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Table>
						<TableBody>
							{displayMatchesAsList(matchesList[2])}
						</TableBody>
					</Table>
				</AccordionDetails>
			</Accordion>
		</>

	return (
		<div>
			<Loading size={60} loading={isLoading}>
				{ListMatches}
			</Loading>
		</div>
	)
}