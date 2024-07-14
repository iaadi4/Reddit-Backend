const express = require('express');
const router = express.Router();
const {PostController, LikeController} = require('../../controllers/index');

router.post(
    '/createpost',
    PostController.create
)

router.post(
    '/likes/toggle',
    LikeController.toggleLike
)

module.exports = router;