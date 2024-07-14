const express = require('express');
const router = express.Router();
const {PostController, LikeController, CommentController} = require('../../controllers/index');

router.post(
    '/createpost',
    PostController.create
)
router.get(
    '/posts/:id',
    PostController.get
)

router.post(
    '/likes/toggle',
    LikeController.toggleLike
)

router.post(
    '/comments/create',
    CommentController.create
)

module.exports = router;