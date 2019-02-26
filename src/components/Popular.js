import React, { Component } from 'react';
import api from '../utils/api';
import RepoGrid from '../components/RepoGrid';


export default class Popular extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null
        }
        this.updateLanguage = this.updateLanguage.bind(this);
    }
    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }
    updateLanguage(lang) {
        this.setState(function(){
            return {
                selectedLanguage: lang,
                repos: null
            }
        });
        api.fetchPopularRepos(lang)
            .then(function(repos){
                this.setState(function(){
                    return {
                        repos:repos
                    }
                })
            }.bind(this));
    }
    render(){
        var languages = ['All', 'Java','JavaScript', 'Ruby','Python'];
        return(
            <div>
            <ul className='languages'>
                    {languages.map(lang => 
                                        <li 
                                            style = {lang === this.state.selectedLanguage ? {color: 'red'}: null}
                                            onClick={this.updateLanguage.bind(null,lang)}
                                            key={lang}>
                                           {lang}
                                        <br/> </li>
                                )
                    }           
            </ul>
                <div>
                       {!this.state.repos ? <p>Loading..</p> :  <RepoGrid repos={this.state.repos}/> }
                </div>
            </div>
        );
    }
}