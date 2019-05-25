const about = (req, res) => {
  res.render('about', {title: 'About App'})
}

module.exports = {
  about
}