const express = require('express');
const router = express.Router();
const passport = require("passport");

const {admins} = require('../models');
router.get("/login", function(req, res) {
  return res.render("login");
});

router.post("/login",passport.authenticate('local', { failureRedirect: '/login' }), async(req,res)=>{
  try{
    const all = await admins.findAll();
    return res.redirect("/dashboard");
  }catch(err){
    return res.status(500).json({
      message: 'not valid'
    })
  }
});


module.exports = router;