import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import ngo from "./assets/img/icons/ngo.png"
import bg from "./assets/img/icons/ngo-bg.png"

export default function Action(props) {
    return (
        <Container className="action-card">
            <img loading="lazy" src={bg} className="action-bg"/>
            <div className="action-title">Act Now!</div>
            <Row className="action-content">
                <Col className="col-2">
                    <img loading="lazy" src={ngo} className="action-icon"/>
                </Col>
                <Col className="col-10">
                    <div className="action-details">
                        {props.data}
                    </div>
                </Col>
            </Row>
            <div className="learn-more">Learn more</div>
        </Container>
    )
}