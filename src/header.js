import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile from './assets/img/icons/profile.png'
import greenPt from './assets/img/icons/greenpoints.png'

export default function Header(props) {
    return (
        <Container>
            <Row>
                <Col xs={8}>
                    <h3>Climate Lens</h3>
                </Col>
                <Col xs={4} align={'right'}>
                    <img alt="green points" src={greenPt} width={30} style={{marginLeft: 5, marginRight: 5}}/>
                    <img alt="profile" src={profile} width={30} style={{marginLeft: 5, marginRight: 5}}/>
                </Col>
            </Row>
        </Container>
    )
}