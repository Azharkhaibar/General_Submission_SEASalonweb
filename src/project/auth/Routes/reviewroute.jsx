import express from "express";
import { getReviews, createReview } from "../controllers/reviewcontroller";

const router = express.Router();

router.get("/reviews", getReviews);
router.post("/reviews", createReview);

export default router;
