import axios from 'axios'

type competList = 'PL' | 'BL1' | 'SA' | 'FL1' | 'PD' | 'CL';

export function getListMatches(competition: competList) {
    const config = {
        "X-Auth-Token": process.env.REACT_APP_API_TOKEN
    }
    
    return axios.get("http://api.football-data.org/v2/competitions/"+competition+"/matches", {headers: config}).then(data => data)
}

export function getClassement(competition: competList) {
    const config = {
        "X-Auth-Token": process.env.REACT_APP_API_TOKEN
    }
    
    return axios.get("http://api.football-data.org/v2/competitions/"+competition+"/standings", {headers: config}).then(data => data)
}

export function getMatchDetail(matchId: string) {
    const config = {
        "X-Auth-Token": process.env.REACT_APP_API_TOKEN_2
    }
    
    return axios.get("http://api.football-data.org/v2/matches/"+matchId, {headers: config}).then(data => data)
}

export function getTeamDetail(teamId: number) {
    const config = {
        "X-Auth-Token": process.env.REACT_APP_API_TOKEN_2
    }
    
    return axios.get("http://api.football-data.org/v2/teams/"+teamId, {headers: config}).then(data => data.data)
}