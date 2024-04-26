import React from 'react';
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";
import img from "./assets/img/icons/news.png"

// function shortenNewsContent(content, maxLen = 50) {
//   if (content.length > maxLen) {
//     return `${content.substr(0, maxLen)}...`
//   } else return content
// }

export default function News(props) {
  return (
    <Container className="news-card">
      <div className="news-more">More News</div>
          <a href={props.data.link}>
            <Row style={{"paddingTop": "10px"}}>
              <Col className="col-3" style={{"verticalAlign": "middle"}}>
                <img className="news-img" src={img}/>
              </Col>
              <Col className="col-9" style={{"verticalAlign": "middle"}}>
                <div className="news-title"> {props.data.title}</div>
                <div className="news-snippet"> {props.data.snippet}</div>
              </Col>
            </Row>
          </a>
    </Container>
  )
}
