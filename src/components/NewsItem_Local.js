import React, { Component } from 'react'
import loading from './newsapp_img.jpg'

export class NewsItem extends Component {
    render() {

        let {title,desc,imageurl,newsurl} = this.props;

        return (
            <div>
                <div className="card">
                    <img src={loading} className="card-img-top" alt={title}/>
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <a rel="noopener" href={newsurl} className="btn btn-dark btn-sm" target="_blank">Read More</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItem
