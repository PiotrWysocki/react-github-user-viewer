import React, { Component } from 'react';

export default class Search extends Component {
    render(){
        return(
            <div className="mx-auto bg-dark col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5">
                <h3 className="text-center mt-2 text-white">React GitHub User Viewer</h3>
                <form onSubmit={this.props.handleSubmit}>
                    <div className="row">
                        <input type="text" className="form-control m-2 search-input" placeholder="Search by Username..."
                               value={this.props.search} onChange={this.props.handleChange}/>
                    </div>
                </form>
            </div>
        )
    }
}