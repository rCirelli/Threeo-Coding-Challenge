import express from 'express';
import LoginController from '../controllers/loginController';
import loginValidation from '../middlewares/login.middleware';

const router = express.Router();

router.post('/', loginValidation, (req, res) => LoginController.login(req, res));
router.get('/validate', (req, res) => LoginController.validate(req, res));

export default router;