const getSaveSearch = (req, res)=>{
    res.render("dashboard-my-savesearch")
}

const getAddNewPpt = (req, res)=>{
    res.render("dashboard-add-new-property")
}

const getMessages = (req, res)=>{
    res.render("dashboard-messages")
}

const getMyFav = (req, res)=>{
    res.render("dashboard-my-favorites")
}

const getMyProfile = (req, res)=>{
    res.render("dashboard-my-profile")
}

const getMyPpt = (req, res)=>{
    res.render("dashboard-my-properties")
}
const getMyReviews = (req, res)=>{
    res.render("dashboard-my-reviews")
}

const getDashboard = (req, res)=>{
    res.render("dashboard-page")
}

module.exports = {
    getDashboard, getMyPpt, getMyProfile, getMyFav, getMessages, getAddNewPpt, getSaveSearch, getMyReviews
}