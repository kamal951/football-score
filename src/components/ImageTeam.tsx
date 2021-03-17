import { useEffect, useState } from 'react';
import { getTeamDetail } from '../api';
import { Loading } from './Loading';

interface Props { teamId: number }

export const ImageTeam = (props: Props) => {
    const [imageUrl, setImagUrl] = useState()
    useEffect(() => {
        getTeamDetail(props.teamId).then((response) => {
            return (setImagUrl(response.crestUrl))
        })
    }, [props.teamId, imageUrl])

    return (
        <Loading size={50} loading={imageUrl === undefined}>
            <img src={imageUrl} alt="logo-team" width="100"></img>
        </Loading>
    )
}