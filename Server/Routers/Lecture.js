import express from 'express';
import {getAllVideo, uploadVideo,updateVideo,deleteVideo,
    likeVideo, viewVideo} from '../Controllers/Lecture.js';
import auth from '../middleware/auth.js';

const lectureRoutes = express.Router();

lectureRoutes.get('/fetch',auth,getAllVideo);
lectureRoutes.post('/add',auth,uploadVideo);
lectureRoutes.patch('/update/:id',auth,updateVideo);
lectureRoutes.delete('/delete/:id',auth,deleteVideo);
lectureRoutes.patch('/:id/like',auth,likeVideo);
lectureRoutes.patch('/:id/view',auth,viewVideo);

export default lectureRoutes;