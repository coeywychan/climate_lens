import React from 'react';
import Container from 'react-bootstrap/Container';

export default function News(props) {

    return (
        <Container>
            <div className="section-title">Related News</div>
            <ul>
                {props.data.map((text, i) => (
                    <li key={i} id={i}>{text}</li>
                ))}
            </ul>
        </Container>
    )
}