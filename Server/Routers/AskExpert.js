import express from 'express';
import {getAllPost, createPost, updatePost,deletePost,likePost,
    answerPost,too_longPost,out_of_my_knowledgePost,incomplete_questionPost,
    other_reasonPost,incorrect_subjectPost} from '../Controllers/AskExpert.js';
import auth from '../middleware/auth.js';

const askExpertRoutes = express.Router();

askExpertRoutes.get('/fetch',auth,getAllPost);
askExpertRoutes.post('/add',auth,createPost);
askExpertRoutes.patch('/update/:id',auth,updatePost);
askExpertRoutes.delete('/delete/:id',auth,deletePost);
askExpertRoutes.patch('/:id/like',auth,likePost);
askExpertRoutes.patch('/:id/answer',auth,answerPost);
askExpertRoutes.patch('/:id/too_long',auth,too_longPost);
askExpertRoutes.patch('/:id/out_of_my_knowledge',auth,out_of_my_knowledgePost);
askExpertRoutes.patch('/:id/incomplete_question',auth,incomplete_questionPost);
askExpertRoutes.patch('/:id/incorrect_subject',auth,incorrect_subjectPost);
askExpertRoutes.patch('/:id/other_reason',auth,other_reasonPost);





// postRoutes.patch('/:id/likePost',auth,likePost);


export default askExpertRoutes;