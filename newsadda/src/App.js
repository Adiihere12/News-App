import React, { Component } from 'react'
import Navbar from './components/Navbar'
import NewsItem from './components/NewsItem'
import News from './components/News'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="News-Adda"/>
        <News pageSize={10}/>
        
      </div>
    )
  }
}
