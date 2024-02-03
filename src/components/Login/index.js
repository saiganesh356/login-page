import {Component} from 'react'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Login extends Component {
  state = {status: false}

  logout = () => {
    this.setState(() => ({status: true}))
  }

  render() {
    const {status} = this.state
    if (status) {
      return <Logout />
    }

    return (
      <div className="container">
        <Message from="home" />
        <button className="bttn-login" onClick={this.logout}>
          Login
        </button>
      </div>
    )
  }
}

export default Login
