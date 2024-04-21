import React from 'react';
import Container from 'react-bootstrap/Container';

export default function Summary(props) {

    return (
        <Container>
            <h4>Summary</h4>
            <ul>
                {props.data.map((text, i) => (
                    <li id={i}>{text}</li>
                ))}
            </ul>
        </Container>
    )
}