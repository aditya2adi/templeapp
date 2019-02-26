import React, { Componenet } from 'react';


export default class RepoGrid extends React.Component {
    render(){
        return(
            <p className="popular-list">
              {this.props.repos.map( (item,index) => 
                        <li 
                            key={item.name}
                            className='popular-item'>
                                <div className='popular-rank'>#{index + 1} </div>
                                <ul className='space-list-items'>
                                    <li>
                                        <img className='avatar' src={item.owner.avatar_url} alt={item.owner.login}/>
                                    </li>
                                    <li><a href={item.html_url}>{item.name}</a></li>
                                    <li>@{item.owner.login}</li>
                                    <li>{item.stargazers_count} stars</li>
                                </ul>
                        </li>
                    )}
            </p>
        )
    }
} 