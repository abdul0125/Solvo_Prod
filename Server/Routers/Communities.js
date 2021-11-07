import express from 'express';
import {getAllCommunity, createCommunity, joinCommunity} from '../Controllers/Communities.js';
import auth from '../middleware/auth.js';

const communityRoutes = express.Router();

communityRoutes.get('/fetch',auth,getAllCommunity);
communityRoutes.post('/add',auth,createCommunity);
communityRoutes.patch('/:id/join',auth,joinCommunity);

export default communityRoutes;