const express = require('express');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const router = express.Router();

const Post = require('../../models/Post');
const User = require('../../models/User');

// @route  POST api/posts
// @desc   Create a post
// @access Private
router.post('/', [ auth, [
    check('text', 'Text is required').not().isEmpty()
] ], async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });

    try {
        const user = await User.findById(req.user.id).select('-password');

        const newPost = new Post({
            text: req.body.text,
            name: user.name,
            avatar: user.avatar
        });

        await newPost.save();
        res.json(newPost);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
