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
      <section className="filter">
        <h4>Filter</h4>

        <select name="city/town" className="city/town">
          <option>Brookline</option>
        </select>
        <select name="property-type" className="property-type">
          <option>Mansion</option>
        </select>
        <select name="number-of-bedrooms" className="number-of-bedrooms">
          <option>11 BR</option>
        </select>
        <select name="number-of-bathrooms" className="number-of-bathrooms">
          <option>8 BA</option>
        </select>

        <div className="filter floor-space">
          <span className="title">Floor Space</span>
          <input type="text" name="min-floor-space" className="min-floor-space"/>
          <input type="text" name="max-floor-space" className="max-floor-space"/>
        </div>
        <div className="filter price">
          <span className="title">Price</span>
          <input type="text" name="min-price" className="min-price"/>
          <input type="text" name="max-price" className="max-price"/>
        </div>

        <div className="filter extras">
          <label for="extras">
            <span>Elevator</span>
            <input name="extras" value="elevator" type="checkbox" />
          </label>
          <label for="extras">
            <span>Swimming Pool</span>
            <input name="extras" value="swimming-pool" type="checkbox" />
          </label>
          <label for="extras">
            <span>Finished Basement</span>
            <input name="extras" value="finished-basedment" type="checkbox" />
          </label>
        </div>
      </section>
    )
  }
}

export default Filter
