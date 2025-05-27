const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

userRouter.post('/username', userController.checkUsername);
userRouter.post('/update-user', userController.updateUser);

module.exports = userRouter;
