Real Estate Website made with React.js.

## Link

## About
This is the first iteration of a real estate website I created over the span of a couple weeks. It is made entirely in React
and is styled with Sass. In development, I extensively relied on state and custom methods to create the site's filter functionality, which is by far the most complicated aspect of the project. Much of this logic can be found in the parent component, realEstate.js, but also in the the child component Filter.js. Currently, all data used for this project is hardcoded
in a file called listingsData.js, as the project is not connected to an API or backend of any sort.

## Features
1. Multiple filter options
2. Dynamic searchbar which filters while typing
3. Aesthetic and intitutive on hover animations

## Future Iterations
1. Currently, this website is entirely front-end. As such, there is no working authentication, despite the presence of a
login/register button. I hope to add a backend in the future to accomodate this functionality. Also, I would like to
incorporate CRUD functionality so users can create, delete, and edit listings.

Summation:
Add Backend for Authentication and CRUD

2. I would also like to make this website's design responsive, as it is currently only accomodates viewing in browser
(listings break on hover in smaller formats).

## Technologies used
1. React.js
2. Sass
