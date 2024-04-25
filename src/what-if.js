import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import {Col, Row} from "react-bootstrap";


export default function WhatIf(props) {

   return (
        <Container className="whatif-card">
            <h2 className="whatif-title">What If Hong Kong</h2>
            <Row>
                <Col className="whatif-img col-6">
                    <img alt="" src={`data:image/jpeg;base64,${props.data[0]}`}/>
                </Col>
                <Col className="whatif-img col-6">
                    <img alt="" src={`data:image/jpeg;base64,${props.data[1]}`}/>
                </Col>
            </Row>
        </Container>
    )
}