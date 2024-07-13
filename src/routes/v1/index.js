const express = require('express');
const router = express.Router();
const {PostController} = require('../../controllers/index');

router.post(
    '/createpost',
    PostController.create
)

module.exports = router;