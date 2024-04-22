import React from 'react';
import {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import Header from './header';
import Summary from './summary';
import WhatIf from "./what-if";
import Elif from "./elif";
import Action from "./action";
import News from "./news";

// TODO
const whatIfContent = "This is what if content";
const elifData = "This is scenario draft";
const newsData = ["news1", "new2", "new3", "new4"];

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
            // .then(() => {
            //     let video = document.querySelector("video");
            //     if (video) video.playbackRate = 0.25
            //     else console.log("sadsjlkjljads")
            // })
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {
                data ? (
                    <div>
                        <Header/>
                        <hr/>

                        <Summary data={data.summary}/>
                        <hr/>

                        <Elif data={elifData}/>
                        <hr/>

                        <WhatIf data={data.video} text={whatIfContent}/>
                        <hr/>

                        <Action/>
                        <hr/>

                        <News data={newsData}/>
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


// function CrossButton(props){
//     return(<Button type="button" className="close" aria-label="Close" onClick={()=>props.removeItem(props.itemKey)}><span aria-hidden="true">&times;</span></Button>)
// }
// class ClimateLens extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {summary:[], elif:''};
//     }
//     componentDidMount(){
//         chrome.storage.local.get(['todoListItems'], (result)=>{
//             const todoListItems = result.summary || [];
//             this.setState({todoListItems});
//         });
//     }
//     removeItem(key){
//         this.setState((prevState)=>{
//             let items = prevState.summary;
//             items.splice(key, 1);
//             chrome.storage.local.set({summary:items});
//             return {summary: items}
//
//         });
//     }
//     addItem(){
//         if(!this.state.elif)
//             return;
//         this.setState((prevState)=>{
//             let items = prevState.summary;
//             items.push(prevState.elif);
//             chrome.storage.local.set({summary:items});
//             return {summary: items, elif:''};
//         });
//     }
//     render(){
//         return(
//             <div className="card climate-lens-container">
//                 <div className="card-header"><h3 className="card-title">climate lens</h3></div>
//                 <div className="card-body">
//                     <ListGroup className="climate-lens">
//                         {this.state.summary.length===0 ?
//                             <p>climate lens is empty.</p> :
//                             this.state.summary.map((l, i) => <ListGroup.Item key={i}>{`${i+1}) ${l}`}<CrossButton itemKey={i} removeItem={this.removeItem.bind(this)}/></ListGroup.Item>)}
//                     </ListGroup>
//                 </div>
//
//                 <div className="card-footer">
//                     <InputGroup className="mb-3">
//                         <FormControl
//                             value={this.state.elif}
//                             placeholder="Task Name"
//                             aria-label="Task Name"
//                             aria-describedby="basic-addon2"
//                             onChange={e=>this.setState({elif:e.target.value})}
//                         />
//                         <InputGroup.Append>
//                             <Button disabled={!this.state.elif} variant="primary" onClick={this.addItem.bind(this)}>Add</Button>
//                         </InputGroup.Append>
//                     </InputGroup>
//                 </div>
//             </div>)
//     }
//
// }
//
export default ClimateLens;
