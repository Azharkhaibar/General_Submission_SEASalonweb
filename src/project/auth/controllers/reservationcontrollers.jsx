import Reservation from "../config/models/reservationsmodel";

export const getReservations = async (req, res) => {
  try {
    const response = await Reservation.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getReservationById = async (req, res) => {
  try {
    const response = await Reservation.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createReservation = async (req, res) => {
  try {
    await Reservation.create(req.body);
    res.status(201).json({ msg: "Reservation Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateReservation = async (req, res) => {
  try {
    await Reservation.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Reservation Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteReservation = async (req, res) => {
  try {
    await Reservation.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Reservation Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
