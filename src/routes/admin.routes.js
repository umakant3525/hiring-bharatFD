import express from 'express';
import {
  getAllFaqs,
  createFaq,
  updateFaq,
  deleteFaq
} from '../controllers/admin.controller.js';
import { asyncHandler } from '../utils/utils.js'; 

const router = express.Router();

router.get('/faqs', asyncHandler(getAllFaqs));
router.post('/faqs', asyncHandler(createFaq));
router.put('/faqs/:id', asyncHandler(updateFaq));
router.delete('/faqs/:id', asyncHandler(deleteFaq));

export default router;
