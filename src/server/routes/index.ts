import { Router} from "express";
import {StatusCodes} from 'http-status-codes'

const router = Router();

router.get('/', (req, res) => {
  console.log(req)
  res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});



export default router;