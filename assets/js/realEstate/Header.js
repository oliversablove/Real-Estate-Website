import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }

  render () {
    return (
      <header>
        <div className="logo">Quicklist</div>

        <nav>
          <a href="#">About Us</a>
          <a href="#">Log In</a>
          <a href="#" className='register-btn'>Register</a>
        </nav>

      </header>
    )
  }
}

export default Header
