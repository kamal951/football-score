import React from 'react'
import bundesliga from '../images/Bundesliga_Logo.svg'
import championsleague from '../images/Champions_League_Logo.svg'
import laliga from '../images/La_Liga_Logo.svg'
import ligue1 from '../images/Ligue_1_Logo.svg'
import premierleague from '../images/Premier_League_Logo.svg'
import seriea from '../images/Serie_A_Logo.svg'

type competList = 'PL' | 'BL1' | 'SA' | 'FL1' | 'PD' | 'CL';

interface Props { league: competList }

export const LeagueImage = (props: Props) => {
    let image = "PL"

    switch (props.league) {
        case "PL":
            image = premierleague
            break;
        case "BL1":
            image = bundesliga
            break;
        case "SA":
            image = seriea
            break;
        case "FL1":
            image = ligue1
            break;
        case "PD":
            image = laliga
            break;
        case "CL":
            image = championsleague
            break;
        default:
            image= premierleague
    }

    return(<img src={image} width="120" alt="Competition league"/>)

}