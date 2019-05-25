const locationList = (req, res) => {
  res.render('location-list', {
    pageHeader: {
      title: 'List Location',
      description: 'all you can eat'
    },
    locations: [{
      place: 'Starcups',
      rating: 3,
      address: '125 High street, Reading, RG12 1PS',
      facilities: ['Hot Drinks', 'Foods', 'Premium Wifi']
    }, {
        place: 'Barbeque',
        rating: 4,
        address: '125 Low street, Reading, RG12 1PS',
        facilities: ['Hot Drinks', 'Foods', 'Premium Wifi']  
    }]
  })
}

const location = (req, res) => {
  res.render('location', {title: 'Location'})
}
const reviewAddForm = (req, res) => {
  res.render('review-add-form', {title: 'Add Location Review'})
}
module.exports = {
  locationList,
  location,
  reviewAddForm
}