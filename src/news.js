import React from 'react';
import Container from 'react-bootstrap/Container';
import {Col, Row} from "react-bootstrap";

function shortenNewsContent(content, maxLen = 50) {
    if (content.length > maxLen) {
        return `${content.substr(0, maxLen)}...`
    } else return content
}

const img = "https://cdn.builder.io/api/v1/image/assets/TEMP/28a650315a3c5fc2821e430953555ee8bffd4b764107c281c91ac8807d551b4c?apiKey=e149f5234c52413fa1cac6bca597f88b&width=100"

export default function News(props) {
    return (
        <Container className="news-card">
            <div className="news-more">More News</div>
            {
                props.data.map((data, i) => {
                    return (
                        <a href={data.link}>
                            <Row style={{"paddingTop": "10px"}} >
                                <Col className="col-3" style={{"vertical-align": "middle"}}>
                                    <img alt={i} className="news-img" src={img}/>
                                </Col>
                                <Col className="col-9" style={{"vertical-align": "middle"}}>
                                    <div className="news-title"> {data.title}</div>
                                    <div className="news-snippet"> {data.snippet}</div>
                                </Col>
                            </Row>
                        </a>
                    )
                })
            }
        </Container>
    )
}