const getLogin = (req, res)=>{
    res.render("page-login")
}

const getRegister = (req, res)=>{
    res.render("page-register")
}

module.exports = {getLogin, getRegister}


"Authorization complete"