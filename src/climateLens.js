import React from 'react';
import {useEffect, useState} from 'react'
import Spinner from 'react-bootstrap/Spinner';

import Header from './header';
import Summary from './summary';
import WhatIf from "./what-if";
import Elif from "./elif";
import Social from "./social";
import Action from "./action";
import News from "./news";
import ngo from "./data/ngo.json"


function fetchData(tabUrl, setState) {
    let url = `https://climate-lens-cpk6gb64hq-uc.a.run.app/api/v1/` +
        `climate_lens?user_region=hongkong&user_lang=english&url=${tabUrl}`
    fetch(url)
        .then(response => response.json())
        .then(json => setState(json))
        .catch(error => console.error(error))
}

function ClimateLens() {

    const [url, setUrl] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        chrome.tabs.query({active: true, lastFocusedWindow: true})
            .then(tabs => tabs[0].url)
            .then(tabUrl => {
                fetchData(tabUrl, setData);
                setUrl(tabUrl)
            })
            .catch(error => console.error(error))
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

                        <Social url={url} summary={data.summary}/>

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
