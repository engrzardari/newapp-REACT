import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {

        let {title,desc,imageurl,newsurl} = this.props;

        return (
            <div>
                <div className="card" style={{width: '18rem'}}>
                    <img src={imageurl} className="card-img-top" alt={title}/>
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <a href={newsurl} className="btn btn-primary btn-sm" target="_blank">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
