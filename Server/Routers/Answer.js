import express from 'express'

import {getAnswers,updateAnswer,postAnswer} from "../controllers/Answer.js"

const answer = express.Router()

answer.get('/',getAnswers)

answer.post('/',postAnswer)

answer.patch('/:id',updateAnswer)

export default answer