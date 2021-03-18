import React from 'react';

export interface Props {
    forme: string
}

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
