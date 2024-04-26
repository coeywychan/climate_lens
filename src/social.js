import React from 'react';
import instagram from './assets/img/icons/instagram.svg'
import linkedin from './assets/img/icons/linkedin.svg'
import twitter from './assets/img/icons/twitter.svg'

const socialIcons = [
    {src: twitter, alt: "Twitter icon", name: "twitter"},
    {src: instagram, alt: "Instagram icon", name: "instagram"},
    {src: linkedin, alt: "LinkedIn icon", name: "linkedin"},
];

function getLinkedinShare(src, url, text) {
    if (src === "linkedin")
        return `https://www.linkedin.com/feed/?shareActive=true&text=${text} ${url}#NewPost`
    else if (src === "twitter")
        return `https://twitter.com/intent/tweet?text=${text} ${url}`
    else if (src === "facebook")
        return `https://www.facebook.com/sharer/sharer.php?u=${url}&t=${text}`
    else return ''
}


function popup(url) {
    chrome.windows.create({
        url: url,
        type: 'popup', width: 600, height: 600,
    });
}

export default function Social(props) {
    return (
        <section className="social-share-section">
            <h2 className="social-share-title">Share with your network</h2>
            <div className="social-icons-container">
                {socialIcons.map((icon, index) => {
                    const url = getLinkedinShare(icon.name, props.url, props.summary);
                    return (
                        <a href={props.url} onClick={() => popup(url)}>
                            <img
                                key={index}
                                src={icon.src}
                                alt={icon.alt}
                                className="social-icon"
                            />
                        </a>
                    )
                })}
            </div>
        </section>

    )
}