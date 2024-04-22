import React from 'react';
import Container from 'react-bootstrap/Container';
import ReactMarkdown from 'react-markdown'

export default function Summary(props) {

    return (
        <Container>
            <div className="section-title">Summary</div>
            <ReactMarkdown>{props.data}</ReactMarkdown>
            {/*<ul>*/}
            {/*    {props.data.map((text, i) => (*/}
            {/*        <li id={i}>{text}</li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
        </Container>
    )
}