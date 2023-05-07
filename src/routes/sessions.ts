import { Router } from 'express';
import { body } from 'express-validator';
import * as controller from '../controllers/session';
import requestValidator from '../middlewares/request-validator';
import sessionValidator from '../middlewares/session-validator';
import secretValidator from '../middlewares/secret-validator';

const router = Router();
router.get('/', secretValidator, controller.list);
router.get('/:sessionId', secretValidator, sessionValidator, controller.find);
router.get('/:sessionId/status', secretValidator, sessionValidator, controller.status);
router.post('/add', secretValidator, body('sessionId').isString().notEmpty(), requestValidator, controller.add);
router.get('/:sessionId/add-sse', secretValidator, controller.addSSE);
router.delete('/:sessionId', secretValidator, sessionValidator, controller.del);

export default router;
