function adminAuth(req, res, next){
//next continuidade a execucao
    if(req.session.user != undefined){
        next();
    }else{
        res.redirect("/login");
    }
}

module.exports = adminAuth;