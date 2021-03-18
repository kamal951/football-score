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

const makeRows = (data: Array<any> | undefined) => {
    const rows = []
    if (data !== undefined) {
        for (let i = 0; i < data.length; i++) {
            rows.push(
                <TableRow key={data[i].team.id} >
                    <TableCell style={{ width: '5%' }}>{data[i].position}</TableCell>
                    <TableCell style={{ width: '50%' }}>
                        <img src={data[i].team.crestUrl} width="20" height="20" alt="logo" /> {data[i].team.name}
                    </TableCell>
                    <TableCell style={{ width: '5%' }} align="center">{data[i].points}</TableCell>
                    <TableCell style={{ width: '5%' }} align="center">{data[i].playedGames}</TableCell>
                    <TableCell style={{ width: '5%' }} align="center">{data[i].won}</TableCell>
                    <TableCell style={{ width: '5%' }} align="center">{data[i].lost}</TableCell>
                    <TableCell style={{ width: '5%' }} align="center">{data[i].draw}</TableCell>
                    <TableCell style={{ width: '5%' }} align="center">{data[i].goalsFor}</TableCell>
                    <TableCell style={{ width: '5%' }} align="center">{data[i].goalsAgainst}</TableCell>
                    <TableCell style={{ width: '5%' }} align="center">{data[i].goalDifference}</TableCell>
                    <TableCell style={{ width: '5%' }} align="center"><Forme forme={data[i].form} /></TableCell>
                </TableRow>
            )
        }
    }
    return rows
}

export const LeagueStanding = (props: Props) => {
    const classes = useStyles();
    const [classement, setClassement] = React.useState();
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        getClassement(props.league).then((resp) => {
            setClassement(resp.data.standings[0].table)
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
                        {makeRows(classement)}
                    </TableBody>
                </Table>
            </TableContainer>
        </Loading>
    );
}
