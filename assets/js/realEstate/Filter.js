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
        <label htmlFor="city">City</label>
        <select name="city" className="filters city" onChange={this.props.change}>
          <option value="All">All</option>
          <option value="Brookline">Brookline</option>
          <option value="Amherst">Amherst</option>
          <option value="Dorchester">Dorchester</option>
          <option value="Roslindale">Roslindale</option>
        </select>
        <label htmlFor="propertyType">Type of Property</label>
        <select name="propertyType" className="filters property-type" onChange={this.props.change}>
          <option value="All">All</option>
          <option value="mansion">Mansion</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
          <option value="bando">Bando</option>
        </select>
        <label htmlFor="bedrooms">Bedrooms</label>
        <select name="bedrooms" className="filters number-of-bedrooms" onChange={this.props.change}>
          <option value="1">1+ BR</option>
          <option value="2">2+ BR</option>
          <option value="3">3+ BR</option>
          <option value="4">4+ BR</option>
          <option value="5">5+ BR</option>
          <option value="6">6+ BR</option>
        </select>
        <label htmlFor="bathrooms">Bathrooms</label>
        <select name="bathrooms" className="filters number-of-bathrooms" onChange={this.props.change}>
        <option value="1">1+ BA</option>
        <option value="2">2+ BA</option>
        <option value="3">3+ BA</option>
        <option value="4">4+ BA</option>
        <option value="5">5+ BA</option>
        <option value="6+">6+ BA</option>
        </select>

        <div className="filters floor-space">
          <span className="title">Floor Space</span>
          <input type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change}  value={this.props.globalState.min_floor_space}/>
          <input type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change}  value={this.props.globalState.max_floor_space}/>
        </div>
        <div className="filters price">
          <span className="title">Price</span>
          <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price}/>
          <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price}/>
        </div>

        <div className="filters extras">
          <span className="title">Extras</span>
          <label htmlFor="extras">
            <span>Elevator</span>
            <input name="elevator" value="elevator" type="checkbox" onChange={this.props.change}/>
          </label>
          <label htmlFor="extras">
            <span>Swimming Pool</span>
            <input name="swimming_pool" value="swimming_pool" type="checkbox" onChange={this.props.change}/>
          </label>
          <label htmlFor="extras">
            <span>Finished Basement</span>
            <input name="finished_basement" value="finished_basement" type="checkbox" onChange={this.props.change}/>
          </label>
        </div>
      </div>
      </section>
    )
  }
}

export default Filter
