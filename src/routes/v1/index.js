const express = require('express');
const router = express.Router();
const {PostController, LikeController, CommentController, AuthController} = require('../../controllers/index');
const auth = require('../../middlewares/authentication');

router.post(
    '/createpost',
    auth,
    PostController.create
)
router.get(
    '/posts/:id',
    PostController.get
)

router.post(
    '/likes/toggle',
    auth,
    LikeController.toggleLike
)

router.post(
    '/comments/create',
    auth,
    CommentController.create
)

router.post(
    '/signup',
    AuthController.signup
)

router.post(
    '/login',
    AuthController.login
)

module.exports = router;