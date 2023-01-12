
import React, { Component } from 'react'

class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl,author,date } = this.props
        return (
            <div className='my-3'>
                <div className="card" >
                    <img src={!imageUrl ? "https://www.cnn.com/2023/01/12/politics/joe-biden-documents-gop-house-george-santos/index.html" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className='text-muted'>By {!author? "Unkonwn": author} on {date}</small></p>
                        <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem;
