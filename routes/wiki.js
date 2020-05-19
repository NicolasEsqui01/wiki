const express = require("express");
const router = express.Router();
const {Page} = require('../models/index')

router.get("/", function (req, res, next) {
  res.render('addpage');
});

router.get("/add", function (req, res, next) {
  res.render('addpage')
});
router.post("/add", function (req, res, next) {
  const nameTitle = req.body.title
  const content = req.body.content
  const status = req.body.status
  Page.create({
    title:nameTitle,
    content:content,
    status:status
  })
  .then(()=>{
    res.redirect('/wiki')
    console.log('done')
  })
  .catch( err => console.log(err))

});
// router.get("/add", function (req, res, next) {
//   res.render('addpage');
// });


module.exports = router