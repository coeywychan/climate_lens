import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile from './assets/img/icons/profile.png'
import icon from './assets/img/icons/icon.svg'
import menu from './assets/img/icons/menu.svg'
import point from './assets/img/icons/coin.svg'

function Profile(){
    return (
        <div className="profile">
            <img loading="lazy" src={menu} className="img-2" />
            <img alt="avatar" loading="lazy" src={profile} className="avatar"/>
        </div>
    )
}

export default function Header(props) {
    return (
        <Container>
            <Row className="header">
                <Col xs={5}>
                    <img alt="Climate Lens" src={icon}/>
                </Col>
                <Col xs={4}>
                    <div className="point">
                        <img alt="Green Point" loading="lazy" src={point} className="point-img"/>
                        <div className="point-value">150</div>
                    </div>
                </Col>
                <Col xs={3}>
                    <Profile/>
                </Col>
            </Row>
        </Container>
    )
}