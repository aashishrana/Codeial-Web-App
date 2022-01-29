module.exports.home = function(req, res){
    console.log(req.cookies);  //if i put a semicolon it shows me the error
    res.cookie('user_id', 25); // this is also showing me the error

    return res.render('home', {
        title: "Home"

    });
}
   