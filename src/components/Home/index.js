import {Component} from 'react'
import Login from '../Login'
import Message from '../Message'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="card-container">
          <Login />
        </div>
      </div>
    )
  }
}

export default Home
