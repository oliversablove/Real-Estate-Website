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
      <section id="listings">

        <section className="search-area">
          <input type="text" name="search" />
        </section>

        <section className="sortby-area">
          <div className="results">300 results found</div>
          <div className="sort-options">
            <select name="sortby" className="sortby">
              <option value="price asc">Highest Price</option>
              <option value="price dsc">Lowest Price</option>
            </select>
            <div className="view">
              <i className="fa fa-th-list" aria-hidden="true"></i>
              <i className="fa fa-th" aria-hidden="true"></i>
            </div>
          </div>
        </section>

        <section className="listings-results">
          <div className="listing">
            <div className="listing-img">
              <span className="address">18 Greylock Rd</span>
              <div className="details">
                <div className="col-md-3">
                  <div className="user-img"> </div>
                </div>

                <div className="col-md-9">
                  <div className="user-details">
                    <span className="user-name">Lucci Kinder</span>
                    <span className="post-date">08/21/19</span>
                  </div>
                  <div className="listing-details">
                    <div className="floor-space">
                      <i className="fa fa-square-o" aria-hidden="true"></i>
                      <span>1000 ft&sup2;</span>
                    </div>
                    <div className="bedrooms">
                      <i className="fa fa-bed" aria-hidden="true"></i>
                      <span>3 Bedrooms</span>
                    </div>
                  </div>

                  <div className="view-btn">
                  View Listing
                  </div>
                </div>

              </div>
            </div>
            <div className="bottom-info">
              <span>$1000 / month</span>
              <span><i className="fa fa-map-marker" aria-hidden="true"></i>Brookline, MA</span>
            </div>

          </div>

        </section>

        <section className="pagination">
          <ul className="paginations-nums">
            <li>Prev</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>Next</li>
          </ul>
        </section>

      </section>
    )
  }
}

export default Listings
