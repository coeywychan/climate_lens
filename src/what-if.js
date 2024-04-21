import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function WhatIf(props) {

    return (
        <Container>
            <h4>What if HK?</h4>
            <div align={'center'}>
                <img alt="" src={`data:image/jpeg;base64,${props.img}`} style={{maxHeight: 100}} />
                <div>{ props.text }</div>
            </div>
        </Container>
    )
}