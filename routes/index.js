
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.contact = function(req, res) {
	res.render('contact', {title: 'Contact'});
};

exports.handleContactForm = function(req, res) {
	console.log(req);
	res.write('thanks');
	res.end();
};

exports.rayray = function (req, res) {
  res.render('ray', {});
};
