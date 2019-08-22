import React, { Component} from 'react'

class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
    this.cities = this.cities.bind(this)
    this.propertyTypes = this.propertyTypes.bind(this)
    this.bedrooms = this.bedrooms.bind(this)
    this.bathrooms = this.bathrooms.bind(this)
  }

  componentWillMount() {
    this.props.populateAction()
  }

  cities() {
    if (this.props.globalState.populateFormsData.cities != undefined) {
      const { cities } = this.props.globalState.populateFormsData

      return cities.map((listing) => {
        return(
          <option key={listing} value={listing}>{listing}</option>
        )
      })
    }
  }

  propertyTypes() {
    if (this.props.globalState.populateFormsData.propertyTypes != undefined) {
      const { propertyTypes } = this.props.globalState.populateFormsData

      return propertyTypes.map((listing) => {
        return(
          <option key={listing} value={listing}>{listing}</option>
        )
      })
    }
  }

  bedrooms() {
    if (this.props.globalState.populateFormsData.bedrooms != undefined) {
      const { bedrooms } = this.props.globalState.populateFormsData

      return bedrooms.map((listing) => {
        return(
          <option key={listing} value={listing}>{listing}+ BR</option>
        )
      })
    }
  }

  bathrooms() {
    if (this.props.globalState.populateFormsData.bathrooms != undefined) {
      const { bathrooms } = this.props.globalState.populateFormsData

      return bathrooms.map((listing) => {
        return(
          <option key={listing} value={listing}>{listing}+ BA</option>
        )
      })
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
          {this.cities()}
        </select>
        <label htmlFor="propertyType">Type of Property</label>
        <select name="propertyType" className="filters property-type" onChange={this.props.change}>
          <option value="All">All</option>
          {this.propertyTypes()}
        </select>
        <label htmlFor="bedrooms">Bedrooms</label>
        <select name="bedrooms" className="filters number-of-bedrooms" onChange={this.props.change}>
          {this.bedrooms()}
        </select>
        <label htmlFor="bathrooms">Bathrooms</label>
        <select name="bathrooms" className="filters number-of-bathrooms" onChange={this.props.change}>
          {this.bathrooms()}
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
