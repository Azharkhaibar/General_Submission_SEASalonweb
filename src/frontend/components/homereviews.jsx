import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../sass/reviewsystem.scss";
import '../../sass/responsive1.scss';

export const Testimony = () => {
  const [slidePrimaryCurr, setSlidePrimaryCurr] = useState(0);

  const testimonials = [
    {
      photo: "/image/Azhagantengjdisds.jpg",
      name: "Cucu nenek Tini",
      rating: 5,
      profession: "Software Engineer",
      location: "Tadika mesra",
      description:
        "sea salon mantep! pacar aku suka, awal masuk disambut hangat, staffnya so professional, stylist hairnya bener2 apa yg pacar aku mau, rambutnya makin pgn ku elus elus, ambience ruangan nyaman, dan quality produk yg digunakan berlevel!, sea salon topp",
    },
    {
      photo: "/image/cewe1.jpg",
      name: "nurul asyiqoh",
      rating: 4,
      profession: "Graphic Designer",
      location: "Bogor",
      description: "keren bgtt :]].",
    },
    {
      photo: "/image/cewe2.jpg",
      name: "Icha",
      rating: 4,
      profession: "Graphic Designer",
      location: "London, UK",
      description: "Great experience, will come again.",
    },
    {
      photo: "/image/Azhagantengjdisds.jpg",
      name: "Dewi",
      rating: 5,
      profession: "Data Scientist",
      location: "Jakarta",
      description: "Amazing service and friendly staff.",
    },
    {
      photo: "/image/cewe2.jpg",
      name: "Siti",
      rating: 3,
      profession: "Teacher",
      location: "Bandung",
      description: "Good experience, but could be better.",
    },
    {
      photo: "/image/cewe1.jpg",
      name: "Rina",
      rating: 4,
      profession: "Doctor",
      location: "Surabaya",
      description: "Very satisfied with the service.",
    },
  ];

  const slidesToShow = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setSlidePrimaryCurr((prev) => (prev + slidesToShow) % testimonials.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getVisibleTestimonials = () => {
    const firstNumIndex = slidePrimaryCurr;
    const lastNumIndex = (slidePrimaryCurr + slidesToShow) % testimonials.length;
    if (firstNumIndex < lastNumIndex) {
      return testimonials.slice(firstNumIndex, lastNumIndex);
    }
    return [...testimonials.slice(firstNumIndex), ...testimonials.slice(0, lastNumIndex)];
  };

  return (
    <div id="testimonial">
      <div className="text__testimonial">
        <h2>Testimoni</h2>
      </div>
      <motion.div className="testimonial__container" style={{ display: "flex", overflow: "hidden" }}>
        <AnimatePresence initial={false}>
          {getVisibleTestimonials().map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial__card"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              style={{ minWidth: "400px", marginRight: "20px" }}
            >
              <div className="testimonial__card__item">
                <img src={testimonial.photo} alt={testimonial.name} className="profile-photo" />
                <h3>{testimonial.name}</h3>
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <img key={i} src="/image/star (1).png" alt="star" className="star-icon" />
                  ))}
                </div>
                <p className="profession">{testimonial.profession}</p>
                <p className="location">{testimonial.location}</p>
                <p className="description">{testimonial.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};


export const ReviewSystem = () => {
  const [reviewsRating, setReviewsRating] = useState([]);
  const [name_viewer, setNameViewer] = useState("");
  const [rating_Value, setRatingValue] = useState(1);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviewsRating(savedReviews);
  }, []);

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviewsRating));
  }, [reviewsRating]);

  const addReview = (AddReviewComment) => {
    setReviewsRating([...reviewsRating, AddReviewComment]);
  };

  const deleteReview = (index) => {
    const newReviewsRating = reviewsRating.filter((_, i) => i !== index);
    setReviewsRating(newReviewsRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      name_viewer,
      rating_Value,
      comment,
      date: new Date().toLocaleString(),
    };
    addReview(newReview);
    setNameViewer("");
    setRatingValue(1);
    setComment("");
  };

  return (
    <div className="review__system">
      <h1>Submit a comment</h1>
      <div className="review__container">
        <form className="review__form" onSubmit={handleSubmit}>
          <div className="form__group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name_viewer} onChange={(e) => setNameViewer(e.target.value)} required />
          </div>
          <div className="form__group">
            <label htmlFor="rating">Rating:</label>
            <select id="rating" value={rating_Value} onChange={(e) => setRatingValue(Number(e.target.value))} required>
              {[1, 2, 3, 4, 5].map((star) => (
                <option key={star} value={star}>
                  {star}
                </option>
              ))}
            </select>
          </div>
          <div className="form__group">
            <label htmlFor="comment">Opinion :</label>
            <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} required></textarea>
          </div>
          <button type="submit">Submit Review</button>
        </form>

        <div className="reviews">
          <h2>Comment({reviewsRating.length})</h2>
          {reviewsRating.length === 0 ? (
            <p>No reviews yet. Be the first to review!</p>
          ) : (
            <ul>
              {reviewsRating.map((review, index) => (
                <li key={index} className="review">
                  <h3>{review.name_viewer}</h3>
                  <p>Rating: {review.rating_Value} / 5</p>
                  <p>{review.comment}</p>
                  <p className="review__date">Last updated: {review.date}</p>
                  <button onClick={() => deleteReview(index)}>Delete</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
