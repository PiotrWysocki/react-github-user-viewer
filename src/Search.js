import React, { Component } from 'react';

export default class Search extends Component {
    render(){
        const search = this.props;

        return(
            <div className="mx-auto bg-dark col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5">
                <h3 className="text-center mt-2 text-white">React GitHub User Viewer</h3>
                <form onSubmit={search.handleSubmit}>
                    <div className="row">
                        <input type="text" className="form-control m-2 search-input" placeholder="Search by Username..."
                               value={search.search} onChange={search.handleChange}/>
                    </div>
                </form>
            </div>
        )
    }
}