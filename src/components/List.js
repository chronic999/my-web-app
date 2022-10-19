import React from 'react'

export function List(props) {
    const { text } = props
    return (
        <>
            <h1>{text}</h1>
            <ul >
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </>
    )
}
