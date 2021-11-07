import express from 'express';
import {getAllPost, createPost,updatePost,deletePost,likePost} from '../Controllers/AskFeed.js';
import auth from '../middleware/auth.js';

const askFeedRoutes = express.Router();

askFeedRoutes.get('/fetch',auth,getAllPost);
askFeedRoutes.post('/add',auth,createPost);
askFeedRoutes.patch('/update/:id',auth,updatePost);
askFeedRoutes.delete('/delete/:id',auth,deletePost);
askFeedRoutes.patch('/:id/like',auth,likePost);





// postRoutes.patch('/:id/likePost',auth,likePost);


export default askFeedRoutes;