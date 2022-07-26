import express from 'express';
import controller from '../controllers/book';

const router = express.Router();

router.get('/ping', controller.serverHealthCheck);

export = router;
