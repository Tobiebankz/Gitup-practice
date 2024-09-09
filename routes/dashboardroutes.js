const express = require('express');
const router = express.Router();
const {
    getDashboard, getMyPpt, getMyProfile, getMyFav, getMessages, getAddNewPpt, getSaveSearch, getMyReviews
} = require("../controllers/dashboardcontroller")


router.get("/", getDashboard)
router.get("/properties", getMyPpt)
router.get("/profile", getMyProfile)
router.get("/favorites", getMyFav)
router.get("/messages", getMessages)
router.get("/add-property", getAddNewPpt)
router.get("/savesearch", getSaveSearch)
router.get("/reviews", getMyReviews)

module.exports = router;