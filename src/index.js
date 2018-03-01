import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import NotFound from './not-found.jpg';
import React, { Component } from 'react';
import { render } from 'react-dom';

const API = 'https://api.github.com/users/';

class App extends Component {

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
        return(
            <div className="container">
                <div className="mx-auto bg-dark col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5">
                    <h3 className="text-center mt-2 text-white">React GitHub User Viewer</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <input type="text" className="form-control m-2 search-input" placeholder="Search by Username..."
                                   value={this.state.search} onChange={this.handleChange}/>
                        </div>
                    </form>
                </div>
                <div className="mx-auto col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5 view-main">
                    <a href={this.state.htmlUrl.length > 0 ? this.state.htmlUrl : null} target="_blank">
                        <img className="img-thumbnail rounded mx-auto d-block my-2 avatar" src={this.state.avatar}/>
                    </a>
                    <p className="text-center font-weight-bold mb-2 name-para">{this.state.name}</p>
                    <p className="text-center mb-2 location-para">{this.state.location}</p>
                </div>
                <div className="mx-auto bg-dark col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5">
                    <div className="row">
                        <a href={this.state.repos > 0 ? this.state.reposUrl : null} target="_blank" className="text-center col my-2 text-light footer-link">
                            <p className="mb-0">Repositories</p>
                            <p className="mb-0">{this.state.repos}</p>
                        </a>
                        <a href={this.state.followers > 0 ? this.state.followersUrl : null} target="_blank" className="text-center col my-2 text-light footer-link">
                            <p className="mb-0">Followers</p>
                            <p className="mb-0">{this.state.followers}</p>
                        </a>
                        <a href={this.state.following > 0 ? this.state.followingUrl : null} target="_blank" className="text-center col my-2 text-light footer-link">
                            <p className="mb-0">Following</p>
                            <p className="mb-0">{this.state.following}</p>
                        </a>
                    </div>

                </div>
            </div>);
    }
}

render(<App />,
    document.getElementById('app')
);