import React, { Component} from 'react'

class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }

  render () {
    return (
      <section className="listings">
        Listings
      </section>
    )
  }
}

export default Listings
