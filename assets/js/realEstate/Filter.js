import React, { Component} from 'react'

class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }

  render () {
    return (
      <section id="filter">
      <div className="inside">
        <h4>Filter</h4>

        <select name="city/town" className="filters city/town" onChange={this.props.change}>
          <option value="Brookline">Brookline</option>
          <option value="Amherst">Amherst</option>
          <option value="Dorchester">Dorchester</option>
          <option value="Roslindale">Roslindale</option>
        </select>
        <select name="property-type" className="filters property-type">
          <option>Mansion</option>
        </select>
        <select name="number-of-bedrooms" className="filters number-of-bedrooms">
          <option>11 BR</option>
        </select>
        <select name="number-of-bathrooms" className="filters number-of-bathrooms">
          <option>8 BA</option>
        </select>

        <div className="filters floor-space">
          <span className="title">Floor Space</span>
          <input type="text" name="min-floor-space" className="min-floor-space"/>
          <input type="text" name="max-floor-space" className="max-floor-space"/>
        </div>
        <div className="filters price">
          <span className="title">Price</span>
          <input type="text" name="min-price" className="min-price"/>
          <input type="text" name="max-price" className="max-price"/>
        </div>

        <div className="filters extras">
          <span className="title">Extras</span>
          <label htmlFor="extras">
            <span>Elevator</span>
            <input name="extras" value="elevator" type="checkbox" />
          </label>
          <label htmlFor="extras">
            <span>Swimming Pool</span>
            <input name="extras" value="swimming-pool" type="checkbox" />
          </label>
          <label htmlFor="extras">
            <span>Finished Basement</span>
            <input name="extras" value="finished-basedment" type="checkbox" />
          </label>
        </div>
      </div>
      </section>
    )
  }
}

export default Filter
