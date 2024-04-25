import React from 'react';
import Container from 'react-bootstrap/Container';

export default function Elif(props) {
    return (
        <Container className="elif-card">
            <div className="elif-title">ELIF</div>
            <div className="elif-content">
                { props.data }
            </div>
        </Container>
    )
}