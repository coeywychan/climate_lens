import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';

export default function WhatIf(props) {

    useEffect(() => {
        let video = document.querySelector("video");
        if (video) {
            video.playbackRate = 0.25;
            video.loop = true;
            video.autoplay = true;
        }
    })

    let media;
    if (props.data.includes("data:image/"))
        media = <img alt="" src={props.data} style={{maxHeight: 100}}/>
    else {
        media = <div dangerouslySetInnerHTML={{__html: props.data}}/>
    }

    return (
        <Container>
            <div className="section-title">What if HK?</div>
            <div align={'center'}>
                {media}
                <div>{props.text}</div>
            </div>
        </Container>
    )
}