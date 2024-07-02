import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import ReservationRoute from "./routes/ReservationRoute.js";
import ReviewRoute from "./routes/ReviewRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(ReservationRoute);
app.use(ReviewRoute);

app.listen(5000, () => console.log("Server up and running..."));
