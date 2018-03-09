import React, { Component } from 'react';

export default class Footer extends Component {
    render(){
        const footer = this.props.footer;

        return(
            <div className="mx-auto bg-dark col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5">
                <div className="row">
                    <a href={footer.repos > 0 ? footer.reposUrl : null} target="_blank"
                       className="text-center col my-2 text-light footer-link">
                        <p className="mb-0">Repositories</p>
                        <p className="mb-0">{footer.repos}</p>
                    </a>
                    <a href={footer.followers > 0 ? footer.followersUrl : null} target="_blank"
                       className="text-center col my-2 text-light footer-link">
                        <p className="mb-0">Followers</p>
                        <p className="mb-0">{footer.followers}</p>
                    </a>
                    <a href={footer.following > 0 ? footer.followingUrl : null} target="_blank"
                       className="text-center col my-2 text-light footer-link">
                        <p className="mb-0">Following</p>
                        <p className="mb-0">{footer.following}</p>
                    </a>
                </div>
            </div>
        )
    }
}