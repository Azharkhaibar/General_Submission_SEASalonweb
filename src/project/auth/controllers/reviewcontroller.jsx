import Review from "../config/models/reviewmodel";

export const getReviews = async (req, res) => {
  try {
    const response = await Review.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createReview = async (req, res) => {
  try {
    await Review.create(req.body);
    res.status(201).json({ msg: "Review Created" });
  } catch (error) {
    console.log(error.message);
  }
};
