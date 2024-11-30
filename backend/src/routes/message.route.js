import { Router } from 'express';
import { protectRoute } from '../middlewares/auth.middleware.js';
import {
  getMessages,
  getUsersForSidebar,
  sendMessage,
} from '../controllers/message.controller.js';

const route = Router();

route.get('/users', protectRoute, getUsersForSidebar);
route.get('/:id', protectRoute, getMessages);
route.post('/send/:id', protectRoute, sendMessage);

export default route;
