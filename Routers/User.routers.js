const express=require('express')
const { AddUser, Find,Update,Delete} = require('../Controllers/user.controller');
const { findByIdAndRemove } = require('../Models/UserModel');

const router = express.Router()


router.get('/liste',findByIdAndRemove)
router.delete('/user/:id', Delete)
router.put('/updateuser/:id', Update)
router.post('/Adduser', AddUser)

module.exports = router;
