const router = require('express').Router();

const { invitationUser } = require("../controller/appController.js");


/** HTTP Reqeust */
router.post("/invitation", invitationUser);


module.exports = router;