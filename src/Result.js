import React, { Component } from 'react';

export default class Result extends Component {
    render(){
        const result = this.props.result;

        return(
            <div className="mx-auto col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5 view-main">
                <a href={result.htmlUrl.length > 0 ? result.htmlUrl : null} target="_blank">
                    <img className="img-thumbnail rounded mx-auto d-block my-2 avatar" src={result.avatar}/>
                </a>
                <p className="text-center font-weight-bold mb-2 name-para">{result.name}</p>
                <p className="text-center mb-2 location-para">{result.location}</p>
            </div>
        )
    }
}