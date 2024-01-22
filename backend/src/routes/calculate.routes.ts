import express from 'express';
import CalculateController from '../controllers/calculateController';

const router = express.Router();
const calculateController = new CalculateController();

router.get('/sum', (req, res) => calculateController.sum(req, res));
router.get('/sub', (req, res) => calculateController.subtract(req, res));
router.get('/mult', (req, res) => calculateController.multiply(req, res));
router.get('/div', (req, res) => calculateController.divide(req, res));

export default router;