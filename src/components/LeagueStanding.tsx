import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { getClassement } from '../api';
import { Forme } from './Forme';
import { Loading } from './Loading';
import { competList } from './MyTypes';

export interface Props {
    league: competList
}

const useStyles = makeStyles({
    table: {
        minWindth: "100%"
    },
});

const makeRowsCL = (data: any | undefined) => {
    const rows = []
    if (data !== undefined) {

        const standing = data.standings
        
        for (let i = 0; i < standing.length; i++) {
            if (standing[i].type === "TOTAL") {
                rows.push(
                    <TableRow style={{marginTop:"30px", marginBottom: "30px"}}>
                        <TableCell></TableCell>
                        <TableCell>{standing[i].group.replace("_", "E ")}</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                )
                for (let j = 0; j < standing[i].table.length; j++) {
                    rows.push(
                        <TableRow key={standing[i].table[j].team.id} >
                            <TableCell style={{ width: '5%' }}>{standing[i].table[j].position}</TableCell>
                            <TableCell style={{ width: '50%' }}>
                                <img src={standing[i].table[j].team.crestUrl} width="20" height="20" alt="logo" /> {standing[i].table[j].team.name}
                            </TableCell>
                            <TableCell style={{ width: '5%' }} align="center">{standing[i].table[j].points}</TableCell>
                            <TableCell style={{ width: '5%' }} align="center">{standing[i].table[j].playedGames}</TableCell>
                            <TableCell style={{ width: '5%' }} align="center">{standing[i].table[j].won}</TableCell>
                            <TableCell style={{ width: '5%' }} align="center">{standing[i].table[j].lost}</TableCell>
                            <TableCell style={{ width: '5%' }} align="center">{standing[i].table[j].draw}</TableCell>
                            <TableCell style={{ width: '5%' }} align="center">{standing[i].table[j].goalsFor}</TableCell>
                            <TableCell style={{ width: '5%' }} align="center">{standing[i].table[j].goalsAgainst}</TableCell>
                            <TableCell style={{ width: '5%' }} align="center">{standing[i].table[j].goalDifference}</TableCell>
                            <TableCell style={{ width: '5%' }} align="center"><Forme forme={standing[i].table[j].form} /></TableCell>
                        </TableRow>
                    )
                }
            }

        }
    }
    return rows
}

const makeRows = (data: any | undefined) => {
    const rows = []
    if (data !== undefined) {
        
        const standing = data.standings[0].table
        for (let i = 0; i < standing.length; i++) {
            rows.push(
                <TableRow key={standing[i].team.id} >
                    <TableCell style={{ width: '5%' }}>{standing[i].position}</TableCell>
                    <TableCell style={{ width: '50%' }}>
                        <img src={standing[i].team.crestUrl} width="20" height="20" alt="logo" /> {standing[i].team.name}
                    </TableCell>
                    <TableCell style={{ width: '5%' }} align="center">{standing[i].points}</TableCell>
                    <TableCell style={{ width: '5%' }} align="center">{standing[i].playedGames}</TableCell>
                    <TableCell style={{ width: '5%' }} align="center">{standing[i].won}</TableCell>
                    <TableCell style={{ width: '5%' }} align="center">{standing[i].lost}</TableCell>
                    <TableCell style={{ width: '5%' }} align="center">{standing[i].draw}</TableCell>
                    <TableCell style={{ width: '5%' }} align="center">{standing[i].goalsFor}</TableCell>
                    <TableCell style={{ width: '5%' }} align="center">{standing[i].goalsAgainst}</TableCell>
                    <TableCell style={{ width: '5%' }} align="center">{standing[i].goalDifference}</TableCell>
                    <TableCell style={{ width: '5%' }} align="center"><Forme forme={standing[i].form} /></TableCell>
                </TableRow>
            )
        }
        return rows
    }
}

export const LeagueStanding = (props: Props) => {
    const classes = useStyles();
    const [classement, setClassement] = React.useState();
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        getClassement(props.league).then((resp) => {
            setClassement(resp.data)
            setLoading(false)
        })
    }, [props.league])

    return (
        <Loading size={50} loading={loading}>
            <TableContainer component={Paper} style={{ width: "inherit" }}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: '5%' }}></TableCell>
                            <TableCell style={{ width: '50%' }}>Club</TableCell>
                            <TableCell style={{ width: '5%' }} align="center">
                                <Tooltip title="Points" aria-label="add">
                                    <Typography>P</Typography>
                                </Tooltip>
                            </TableCell>
                            <TableCell style={{ width: '5%' }} align="center">
                                <Tooltip title="Matchs joués" aria-label="add">
                                    <Typography>MJ</Typography>
                                </Tooltip>
                            </TableCell>
                            <TableCell style={{ width: '5%' }} align="center">
                                <Tooltip title="Victoires" aria-label="add">
                                    <Typography>V</Typography>
                                </Tooltip>
                            </TableCell>
                            <TableCell style={{ width: '5%' }} align="center">
                                <Tooltip title="Défaites" aria-label="add">
                                    <Typography>D</Typography>
                                </Tooltip>
                            </TableCell>
                            <TableCell style={{ width: '5%' }} align="center">
                                <Tooltip title="Nuls" aria-label="add">
                                    <Typography>N</Typography>
                                </Tooltip>
                            </TableCell>
                            <TableCell style={{ width: '5%' }} align="center">
                                <Tooltip title="Buts mis" aria-label="add">
                                    <Typography>BM</Typography>
                                </Tooltip>
                            </TableCell>
                            <TableCell style={{ width: '5%' }} align="center">
                                <Tooltip title="Buts encaissés" aria-label="add">
                                    <Typography>BE</Typography>
                                </Tooltip>
                            </TableCell>
                            <TableCell style={{ width: '5%' }} align="center">
                                <Tooltip title="Différence de buts" aria-label="add">
                                    <Typography>DB</Typography>
                                </Tooltip>
                            </TableCell>
                            <TableCell style={{ width: '5%' }} align="center">
                                <Tooltip title="Forme des 5 d. matchs" aria-label="add">
                                    <Typography>Forme</Typography>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {props.league === "CL" ? makeRowsCL(classement) : makeRows(classement)}
                    </TableBody>
                </Table>
            </TableContainer>
        </Loading>
    );
}
