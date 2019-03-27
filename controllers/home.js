/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'We Do Dope $hit!'
  });
};

/**
 * GET /services
 * Services page.
 */
exports.services = (req, res) => {
  res.render('services', {
    title: 'Services'
  });
};

/**
 * GET /about
 * about page.
 */
exports.about = (req, res) => {
  res.render('about', {
    title: 'About Us'
  });
};

/**
 * GET /portfolio
 * portfolio page.
 */
exports.portfolio = (req, res) => {
  res.render('portfolio', {
    title: 'Our Portfolio'
  });
};