import { makeStyles } from "@material-ui/core"

interface Props {
    homeScore: number | null,
    awayScore: number | null
}


const useStyles = makeStyles((theme) => ({
    scoreContainer: {
        display: "grid",
        gridTemplateColumns: "25px 10px 25px",
        gridTemplateRows: "50px",
        marginLeft: "50px", 
        marginRight: "50px"
    },
    scoreLeft: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "solid",
        borderColor: "grey",
        borderWidth: "1px 0 1px 1px",
        borderRadius: "5px 0 0 5px"
    },
    scoreRight: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "solid",
        borderColor: "grey",
        borderWidth: "1px 1px 1px 0",
        borderRadius: "0 5px 5px 0"
    },
    sign: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "solid",
        borderColor: "grey",
        borderWidth: "1px 0 1px 0",
    }
}))

export const Score = (props: Props) => {
    const classes = useStyles()

    return (
        <div className={classes.scoreContainer}>
            <div className={classes.scoreLeft}>{props.homeScore !== null ? props.homeScore : "-"}</div>
            <div className={classes.sign}>:</div>
            <div className={classes.scoreRight}>{props.awayScore !== null ? props.awayScore : "-"}</div>
        </div>
    )
}