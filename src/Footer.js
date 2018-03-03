import React, { Component } from 'react';

export default class Footer extends Component {
    render(){
        return(
            <div className="mx-auto bg-dark col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5">
                <div className="row">
                    <a href={this.props.repos > 0 ? this.props.reposUrl : null} target="_blank"
                       className="text-center col my-2 text-light footer-link">
                        <p className="mb-0">Repositories</p>
                        <p className="mb-0">{this.props.repos}</p>
                    </a>
                    <a href={this.props.followers > 0 ? this.props.followersUrl : null} target="_blank"
                       className="text-center col my-2 text-light footer-link">
                        <p className="mb-0">Followers</p>
                        <p className="mb-0">{this.props.followers}</p>
                    </a>
                    <a href={this.props.following > 0 ? this.props.followingUrl : null} target="_blank"
                       className="text-center col my-2 text-light footer-link">
                        <p className="mb-0">Following</p>
                        <p className="mb-0">{this.props.following}</p>
                    </a>
                </div>
            </div>
        )
    }
}