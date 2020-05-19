const express = require("express");
const router = express.Router();
const {page} = require('../models/index')

router.get("/add", function (req, res, next) {
  res.render('addpage')
});
router.post("/add", function (req, res, next) {
  const nameTitle = req.body.title
  const urlTitle = req.body.urlTitle
  const content = req.body.content
  const status = req.body.status
  page.create({
    title:nameTitle,
    urlTitle:urlTitle,
    content:content,
    status:status
  })
  .then(()=>{
    res.redirect('/')
  })
  .catch( err => console.log(err))

});
// router.get("/add", function (req, res, next) {
//   res.render('addpage');
// });


module.exports = router