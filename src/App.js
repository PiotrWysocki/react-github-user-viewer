import React, { Component } from 'react';
import fetch from 'node-fetch';

import Search from './Search';
import Result from './Result';
import Footer from './Footer';

import NotFound from './not-found.jpg';

const API = 'https://api.github.com/users/';

export default class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            search: '',
            avatar: NotFound,
            htmlUrl: '',
            name: '',
            location: '',
            repos: '',
            followers: '',
            following: '',
            reposUrl: '',
            followersUrl: '',
            followingUrl: ''

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        let url = `${API}PiotrWysocki`;

        this.fetchData(url);
    }

    fetchData(url){
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if(data.message === "Not Found"){
                    this.setState({
                        name: '',
                        location: 'There is no such user, try again',
                        avatar: NotFound,
                        repos: '',
                        followers: '',
                        following: '',
                        htmlUrl: ''
                    });
                }else {
                    this.setState({
                        avatar: data.avatar_url,
                        htmlUrl: data.html_url,
                        name: data.name,
                        location: data.location,
                        repos: data.public_repos,
                        followers: data.followers,
                        following: data.following,
                        reposUrl: `${data.html_url}?tab=repositories`,
                        followersUrl: `${data.html_url}?tab=followers`,
                        followingUrl: `${data.html_url}?tab=following`
                    });
                }
            })
            .catch(() => {
                this.setState({
                    name: '',
                    location: "Network response was not ok, try again",
                    avatar: NotFound,
                    repos: '',
                    followers: '',
                    following: '',
                    htmlUrl: ''
                })
            })
    }

    handleChange(event){
        this.setState({
            search: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();

        let url = `${API}${this.state.search}`;
        this.fetchData(url);
    }

    render(){

        const result = {
            htmlUrl: this.state.htmlUrl,
            avatar: this.state.avatar,
            name: this.state.name,
            location: this.state.location
        };

        const footer = {
            repos: this.state.repos,
            reposUrl: this.state.reposUrl,
            followers: this.state.followers,
            followersUrl: this.state.followersUrl,
            following: this.state.following,
            followingUrl: this.state.followingUrl
        };

        return(
            <div className="container">
                <Search search={this.state.search} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                <Result result={result}/>
                <Footer footer={footer}/>
            </div>);
    }
}
