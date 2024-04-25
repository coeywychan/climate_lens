import React from 'react';
import instagram from './assets/img/icons/instagram.svg'
import linkedin from './assets/img/icons/linkedin.svg'
import twitter from './assets/img/icons/twitter.svg'


const socialIcons = [
    {src: twitter, alt: "Twitter icon", url: "https://twitter.com/"},
    {src: instagram, alt: "Instagram icon", url: "https://www.instagram.com/"},
    {src: linkedin, alt: "LinkedIn icon", url: "https://www.linkedin.com/"},
];

export default function Social(props) {
    return (
        <section className="social-share-section">
            <h2 className="social-share-title">Share with your network</h2>
            <div className="social-icons-container">
                {socialIcons.map((icon, index) => (
                    <a href={icon.url}>
                        <img
                            key={index}
                            src={icon.src}
                            alt={icon.alt}
                            className="social-icon"
                        />
                    </a>
                ))}
            </div>
        </section>

    )
}