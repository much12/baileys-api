import { Router } from 'express';
import { query } from 'express-validator';
import * as controller from '../controllers/chat';
import requestValidator from '../middlewares/request-validator';
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
router.get(
  '/:jid',
  secretValidator,
  query('cursor').isNumeric().optional(),
  query('limit').isNumeric().optional(),
  requestValidator,
  controller.find
);

export default router;
