import "../sass/layout.scss";
import React, { useState } from "react";
import { BannerHaircut } from "./bannerlayout";
import { Footer } from "../frontend/components/home";

export const HaircutSection = () => {
  const [priceHaircut, setPriceHaircut] = useState("Rp 500.000");
  const [currentHaircut, setCurrentHaircut] = useState("Haircut 1");
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleHaircutClick = (newPrice, newHaircut) => {
    setPriceHaircut(newPrice);
    setCurrentHaircut(newHaircut);
  };

  const nameCommenterPublic = (event) => {
    setName(event.target.value);
  };

  const PublicRatingCommenter = (event) => {
    setRating(event.target.value);
  };

  const PublicChangeCommenter = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (name.trim() && rating.trim() && comment.trim()) {
      setComments([...comments, { name, rating, comment }]);
      setName("");
      setRating("");
      setComment("");
    }
  };

  const new__haircut = {
    imgShow: "/images/haircut.jpg",
  };

  const getHaircutText = (haircut) => {
    switch (haircut) {
      case "Haircut 1":
        return "Haircut 1 is a classic style that has been popular for decades. It is perfect for all hair types.";
      case "Haircut 2":
        return "Haircut 2 is a modern style that is currently trending. It suits people who like a fresh and edgy look.";
      case "Haircut 3":
        return "Haircut 3 is a versatile style that can be easily adjusted for a casual or formal appearance.";
      default:
        return "is a classic style that has been popular for decades. It is perfect for all hair types.";
    }
  };

  return (
    <div id="haircut__sec">
      <div className="haircut__sec__container">
        <div className="haircut__sec__left">
          <img src={new__haircut.imgShow} alt="haircut__image" />
          <div className="text__haircut">
            <h2>{currentHaircut}</h2>
            <p>{getHaircutText(currentHaircut)}</p>
          </div>
        </div>

        <div className="haircut__sec__right">
          <h4>SEA Salon</h4>
          <h2>Haircut</h2>
          <h3>{priceHaircut}</h3>
          <div className="txt__haircut">
            <h4>Style</h4>
            <div className="flex__haircut">
              <h3 onClick={() => handleHaircutClick("Rp 500.000", "Haircut 1")}>Haircut 1</h3>
              <h3 onClick={() => handleHaircutClick("Rp 750.000", "Haircut 2")}>Haircut 2</h3>
              <h3 onClick={() => handleHaircutClick("Rp 1.000.000", "Haircut 3")}>Haircut 3</h3>
            </div>
            <h2>Book Now</h2>
            <div className="comment__haircut__right">
              <p>Comment</p>
              <div className="comment__haircut__container">
                <form onSubmit={handleCommentSubmit}>
                  <input type="text" value={name} onChange={nameCommenterPublic} placeholder="Your Name" required />
                  <input type="number" value={rating} onChange={PublicRatingCommenter} placeholder="Rating (1-5)" min="1" max="5" required />
                  <textarea value={comment} onChange={PublicChangeCommenter} placeholder="Write your comment..." required />
                  <button type="submit">Submit</button>
                </form>
                <div className="comments__list">
                  {comments.map((comment, index) => (
                    <div key={index} className="comment__item">
                      <p>
                        <strong>Name:</strong> {comment.name}
                      </p>
                      <p>
                        <strong>Rating:</strong> {comment.rating}
                      </p>
                      <p>
                        <strong>Comment:</strong> {comment.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export class Haircut extends React.Component {
  render() {
    return (
      <>
        <BannerHaircut />
        <HaircutSection />
        <Footer />
      </>
    );
  }
}
