import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page : 1
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=1de876038e2e452d80f742ea67da6f85&page=${this.state.page}pageSize=${this.props.pageSize}`
    let data = await fetch(url)
    
    let parseData = await data.json()
    console.log(parseData)
    this.setState({
      articles: parseData.articles,
      totalResults : parseData.totalResults,

    })
  }

  handlePrevclick = async () => {
    
    let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=1de876038e2e452d80f742ea67da6f85&page=${this.state.page-1}pageSize=${this.props.pageSize}`
    let data = await fetch(url)
    let parseData = await data.json()
    console.log(parseData)
    this.setState({
      page : this.state.page - 1,
      articles: parseData.articles,

    })
  }
  

  handleNextclick = async () => {
    
    let url =  `https://newsapi.org/v2/everything?q=bitcoin&apiKey=1de876038e2e452d80f742ea67da6f85&page=${this.state.page+1}pageSize=${this.props.pageSize}`
    let data = await fetch(url)
    let parseData = await data.json()
    console.log(parseData)
    this.setState({
      page : this.state.page + 1,
      articles: parseData.articles,
    })
  }

    




  render() {
    return (
      <div className='container my-3'>
        <h2>NewsAdda - Top Headlines</h2>
        
        <div className='row'>
          {this.state.articles.map((element) => (
            <div className='col-md-4' key={element.publishedAt}>
              <NewsItem title={element.title} description={element.description} imageurl=
                {element.urlToImage} newsurl={element.url} />

            </div>

          ))}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button  disabled={this.state.page <=1}className='btn btn-danger'onClick={this.handlePrevclick}>&larr;Previous</button>
          <button  disabled={this.state.page+1 > Math.ceil(this.state.totalResults/10)} className='btn btn-danger'onClick={this.handleNextclick }>Next &larr;</button>
        </div>

      </div>
    )
  }
}

