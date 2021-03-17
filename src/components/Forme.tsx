import { Chip } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components'

export interface Props {
    forme: string
}

const WinChip = styled(Chip)`
    background-color: '#19C80A';
    color: "white";
    border-radius: "10px";
`

const DrawChip = styled(Chip)`

`

const LoseChip = styled(Chip)`

`

export const Forme = (props: Props) => {
    const forme = props.forme.split(',')
    return (
        <div style={{ display: "flex" }}>
            {forme.map((item) => {
                switch (item) {
                    case "W":
                        return (
                            <div
                                style={{
                                    backgroundColor: '#4caf50',
                                    color: "white",
                                    borderRadius: "5px",
                                    width: "20px",
                                    marginRight: "5px"
                                }} >V</div>
                        )
                    case "L":
                        return (
                            <div
                                style={{
                                    backgroundColor: '#f44336',
                                    color: "white",
                                    borderRadius: "5px",
                                    width: "20px",
                                    marginRight: "5px"
                                }} >D</div>
                        )
                    default:
                        return (
                            <div
                                style={{
                                    backgroundColor: '#6c7a89',
                                    color: "white",
                                    borderRadius: "5px",
                                    width: "20px",
                                    marginRight: "5px"
                                }} >N</div>
                        )
                }

            })}
        </div >
    );
}
