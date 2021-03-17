import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    footer: {
        marginTop:"calc(5% + 60px)",
        bottom: 0
      }
}));

export const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className="row">

                    <div className="col-md-8 col-sm-6">
                        <div className="footer-copyright">
                            <p>Kamal ALLALI - 2021 - Football data provided by the Football-Data.org API</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}