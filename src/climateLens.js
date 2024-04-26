import React from 'react';
import {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import Header from './header';
import Summary from './summary';
import WhatIf from "./what-if";
import Elif from "./elif";
import Social from "./social";
import Action from "./action";
import News from "./news";
import ngo from "./data/ngo.json"

function fetchData(url, setState) {
    fetch(url)
        .then(response => response.json())
        .then(json => setState(json))
        .catch(error => console.error(error))
}

function getUrl(tabUrl) {
    return `https://climate-lens-cpk6gb64hq-uc.a.run.app/api/v1/climate_lens?
        user_region=hongkong&user_lang=english&url=${tabUrl}`
}


function ClimateLens() {

    const [data, setData] = useState(null);

    useEffect(() => {
        chrome.tabs.query({active: true, lastFocusedWindow: true})
            .then(tabs => getUrl(tabs[0].url))
            .then(url => fetchData(url, setData))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {
                data ? (
                    <div>
                        <Header/>

                        <Summary data={data.summary}/>

                        <Elif data={data.elif_}/>

                        <WhatIf data={data.images}/>

                        <Social/>

                        <Action data={ngo.data}/>

                        <News data={data.suggested_links[0]}/>
                    </div>
                ) : (
                    <div className="centered">
                        <Spinner animation="grow" variant="success"/>
                        <p className="text-success">Loading</p>
                    </div>
                )
            }
        </div>
    )
}

export default ClimateLens;
