import React from 'react';
import Container from 'react-bootstrap/Container';

export default function Elif(props) {
    return (
        <Container >
            <h4>ELIF</h4>
            <div align={'center'}>
                <div>{ props.data }</div>
            </div>
        </Container>
    )
}