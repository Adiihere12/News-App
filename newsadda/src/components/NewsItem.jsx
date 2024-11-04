import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageurl, newsurl } = this.props;
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageurl ? "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600" : imageurl}
                        className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsurl} className="btn btn-danger">ReadMore</a>


                    </div>
                </div>
            </div>
        );
    }
}
