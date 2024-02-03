import {Component} from 'react'
import './index.css'

class Message extends Component {
  render(props) {
    const {from} = this.props
    let message
    if (from === 'logout') {
      message = 'Welcome User'
    } else {
      message = 'Please Login'
    }

    return <h1 className="heading">{message}</h1>
  }
}

export default Message
