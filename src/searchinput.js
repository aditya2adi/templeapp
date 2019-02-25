import React, { Component } from 'react';

export default class SearchInput extends React.Component {
    constructor() {
        super();
        this.state = {
            followUp: "2nd week",
            visits: 0,
            searchString: ""
        };
        this.searchTemples = this.searchTemples.bind(this);
    }
    searchTemples(event) {
        this.setState({
            searchString: event.target.value
        })
    }
   
    render(){
        return(            
            <div>
                <input type="text" name="searchTemple" placeholder="temple name,zipcode, city, street" onChange={this.searchTemples}/><br />
                <button>Search</button>
                <label>{this.state.searchString}</label>
                <ol>
                    {this.props.temples.map(temple => <li>{temple.templeName}, {temple.address.streetName}</li>)}
                </ol>
            </div>
        )
    }
}