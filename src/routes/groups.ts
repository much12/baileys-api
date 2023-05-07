import { Router } from 'express';
import { query } from 'express-validator';
import * as controller from '../controllers/group';
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
router.get('/:jid', secretValidator, sessionValidator, controller.find);
router.get('/:jid/photo', secretValidator, sessionValidator, controller.photo);

export default router;
