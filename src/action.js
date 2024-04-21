import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function Action(props) {
    return (
        <Container>
            <h4>Action</h4>
            <div align={"center"}>
                <Row style={{"justify-content": "space-around", width: "60%"}}>
                    <Button>Share</Button>
                    <Button>Donate</Button>
                    <Button>Join</Button>
                </Row>
            </div>
        </Container>
    )
}