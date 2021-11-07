import express from 'express';
import {createHint,updateHint,deleteHint,likeHint,dislikeHint} from '../Controllers/Hints.js';
import auth from '../middleware/auth.js';


const Hints = express.Router();


Hints.post('/add/:id',auth,createHint);
Hints.patch('update/:id',auth,updateHint);
Hints.delete('delete/:id',auth,deleteHint);
Hints.patch('/:id/like',auth,likeHint);
Hints.patch('/:id/dislike',auth,dislikeHint);

// postRoutes.patch('/:id/likePost',auth,likePost);


export default Hints;