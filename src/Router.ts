import {verifyJWT} from './middleware/loginMiddleware'
import express from 'express'
import UserController from './controller/UserController'

export const router = express.Router()

router.post('/login', UserController.login)

router.get('/user', verifyJWT, UserController.getAllUser)

router.get('/user/:id', UserController.getUserById)
router.post('/user', UserController.createUser)
router.put('/user/:id', UserController.editUser)
router.delete('/user/:id', UserController.deleteUser)
