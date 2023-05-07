import { Router } from 'express';
import { body, query } from 'express-validator';
import * as controller from '../controllers/contact';
import requestValidator from '../middlewares/request-validator';
import sessionValidator from '../middlewares/session-validator';
import secretValidator from '../middlewares/secret-validator';

const router = Router({ mergeParams: true });
router.get(
  '/',
  secretValidator,
  query('cursor').isNumeric().optional(),
  query('limit').isNumeric().optional(),
  requestValidator,
  controller.list
);
router.get('/blocklist', secretValidator, sessionValidator, controller.listBlocked);
router.post(
  '/blocklist/update',
  secretValidator,
  body('jid').isString().notEmpty(),
  body('action').isString().isIn(['block', 'unblock']).optional(),
  requestValidator,
  sessionValidator,
  controller.updateBlock
);
router.get('/:jid', secretValidator, sessionValidator, controller.check);
router.get('/:jid/photo', secretValidator, sessionValidator, controller.photo);

export default router;
