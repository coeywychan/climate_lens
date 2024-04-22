import React from 'react';
import Container from 'react-bootstrap/Container';

export default function Elif(props) {
    return (
        <Container >
            <div className="section-title">ELIF</div>
            <div align={'center'}>
                <div>{ props.data }</div>
            </div>
        </Container>
    )
}