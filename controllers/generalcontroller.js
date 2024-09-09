const getHome = (req, res)=>{
    res.render("index")
}

const getAbout = (req, res)=>{
    res.render("page-about")
}

const getProperty = (req, res)=>{
    res.render("listing-property")
}

const getAgent = (req, res)=>{
    res.render("listing-agent")
}

const getAgencies = (req, res)=>{
    res.render("page-agencies")
}

const getBlog = (req, res)=>{
    res.render("page-blog")
}

const getBlogDetails = (req, res)=>{
    res.render("page-blog-singles")
}

const getContact = (req, res)=>{
    res.render("page-contact")
}

const getFaq = (req, res)=>{
    res.render("page-faq")
}

const getGallery = (req, res)=>{
    res.render("page-gallery")
}

const getService = (req, res)=>{
    res.render("page-service")
}

const getShop = (req, res)=>{
    res.render("page-shop")
}
const getTerms = (req, res)=>{
    res.render("page-terms")
}

const getShopCart = (req, res)=>{
    res.render("shop-cart")
}

const getShopCheckout = (req, res)=>{
    res.render("shop-checkout")
}

const getShopDetails = (req, res)=>{
    res.render("shop-single")
}

const getShopOrder = (req, res)=>{
    res.render("shop-order")
}

const getPropertyDetails = (req, res)=>{
    res.render("property-details")
}

module.exports = {getHome, getAbout, getProperty, getAgent, getAgencies, getBlog, getBlogDetails, getContact, getFaq, getGallery, getService, getShop, getTerms, getShopCart, getShopCheckout, getShopDetails, getShopOrder, getPropertyDetails}