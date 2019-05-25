const locationList = (req, res) => {
  res.render('location-list', {
    title: 'List of location'
  })
}

module.exports = {
  locationList,
}