function HomeRoutes() {

    var self = this;

    // app.get('/'...)
    self.viewIndex = function (req, res) {
        res.render('index.jade', {
            title:'fastAnswers',
            currentUser:req.user
        });
    };
		self.viewContactUs = function(req,res){
				res.render('contactus.jade', {
						title:'Contact Us | fastAnswers',
						currentUser:req.user
				});
		};
		self.viewFaq = function(req,res){
				res.render('faq.jade', {
						title:'FAQ/Help | fastAnswers',
						currentUser:req.user
				});
		};
		self.viewVersion = function(req,res){
				res.render('version/version.jade', {
						title:'Version Control | fastAnswers',
						currentUser:req.user
				})
		};
}

module.exports = new HomeRoutes();