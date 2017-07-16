const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('placeholder', { title: 'johnnykramer.ninja' });
});

module.exports = router;
