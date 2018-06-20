const express = require('express');
const router = express.Router();

// Get homepage
router.get('/', (req, res, next) => {
    res.render('contact');
});


module.exports = router;