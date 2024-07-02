import "../sass/layout.scss";
import React, { useState } from "react";
import { BannerPredicure } from "./bannerlayout";
import { Footer } from "../frontend/components/home";

export const PedicureSection = () => {
  const [pricePedicure, setPricePedicure] = useState("Rp 2.000.000");
  const [currentPedicure, setCurrentPedicure] = useState("Pedicure 1");
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handlePedicureClick = (newPrice, newPedicure) => {
    setPricePedicure(newPrice);
    setCurrentPedicure(newPedicure);
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

  const new__pedicure = {
    imgShow: "/image/manicure pedicure.jpg",
  };

  const getPedicureText = (pedicure) => {
    switch (pedicure) {
      case "Pedicure 1":
        return "Pedicure 1 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s.";
      case "Pedicure 2":
        return "Pedicure 2 is another type of dummy text used in the printing and typesetting industry. It has been widely used since the 1500s.";
      case "Pedicure 3":
        return "Pedicure 3 is a popular dummy text in the printing industry. It has been in use since the 1500s.";
      default:
        return "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s.";
    }
  };

  return (
    <div id="pedicure__sec">
      <div className="pedicure__sec__container">
        <div className="pedicure__sec__left">
          <img src={new__pedicure.imgShow} alt="pedicure__image" />
          <div className="text__pedicure">
            <h2>{currentPedicure}</h2>
            <p>{getPedicureText(currentPedicure)}</p>
          </div>
        </div>

        <div className="pedicure__sec__right">
          <h4>SEA Salon</h4>
          <h2>Pedicure</h2>
          <h3>{pricePedicure}</h3>
          <div className="txt__pedicure">
            <h4>Style</h4>
            <div className="flex__pedicure">
              <h3 onClick={() => handlePedicureClick("Rp 2.000.000", "Pedicure 1")}>Pedicure 1</h3>
              <h3 onClick={() => handlePedicureClick("Rp 3.000.000", "Pedicure 2")}>Pedicure 2</h3>
              <h3 onClick={() => handlePedicureClick("Rp 4.000.000", "Pedicure 3")}>Pedicure 3</h3>
            </div>
            <h2>Book Now</h2>
            <div className="comment__pedicure__right">
              <p>Comment</p>
              <div className="comment__pedicure__container">
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

export class Pedicure extends React.Component {
  render() {
    return (
      <>
        <BannerPredicure />
        <PedicureSection />
        <Footer />
      </>
    );
  }
}
