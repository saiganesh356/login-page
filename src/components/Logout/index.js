import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import './index.css'

class Logout extends Component {
  state = {status: false}

  home = () => {
    this.setState(() => ({status: true}))
  }

  render() {
    const {status} = this.state
    if (status) {
      return <Login />
    }
    const message = <Message />

    return (
      <div className="container">
        <Message from="logout" />
        <button className="bttn-logout" onClick={this.home}>
          Logout
        </button>
      </div>
    )
  }
}

export default Logout
