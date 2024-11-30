import { Router } from 'express';
import { protectRoute } from '../middlewares/auth.middleware.js';
import {
  login,
  logout,
  signup,
  updateProfile,
  checkAuth,
} from '../controllers/auth.controller.js';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

router.put('/update-profile', protectRoute, updateProfile);

router.get('/check', protectRoute, checkAuth);

export default router;
