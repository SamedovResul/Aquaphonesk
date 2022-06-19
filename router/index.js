import express, { Router } from "express";
import { tempraturePost,tempratureGet } from '../controller/temprature.js'

const router = express.Router()

router.post('/', tempraturePost);
router.get('/', tempratureGet);

export default router