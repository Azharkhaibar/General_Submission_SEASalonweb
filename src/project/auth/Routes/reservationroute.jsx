import express from "express";

import { GetReservations, GetReservationsById, createReservation, updateReservation, deleteReservation } from "../controllers/reservationcontrollers.jsx";

export const router = express.Router();

router.get("/reservations", GetReservations);
router.get("/reservations/:id", GetReservationsById);
router.get("/reservations", createReservation);
router.get("/reservations/:id", updateReservation);
router.get("/reservations/:id", deleteReservation);
