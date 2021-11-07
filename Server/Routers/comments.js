import express from 'express';

import  {getComment,post, deleteComment,likeComment,getDiscuss,postDiscuss,deleteDiscuss,reply}  from '../controllers/comments.js';

const router = express.Router()

router.delete('/:id',deleteComment)

router.get('/',getComment)

router.patch('/:id',likeComment)

router.post('/post',post)

router.post('/discuss/reply',reply)

router.delete('/discuss/:id',deleteDiscuss)

router.get('/discuss',getDiscuss)

// router.patch('/discuss//:id',ReplyDiscuss)

router.post('/discuss',postDiscuss)





export default router