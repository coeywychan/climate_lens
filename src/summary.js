import React from 'react';
import Container from 'react-bootstrap/Container';

export default function Summary(props) {

    return (
        <Container className="summary-card">
            <div className="summary-title">Summary</div>
            <article className="summary-content">{props.data}</article>
        </Container>
    )
}