import "../sass/layout.scss";
import React, {useState} from "react";
import { BannerFacialTreatment } from "./bannerlayout";
import { Footer } from "../frontend/components/home";

export const FacialTreatmentSection = () => {
  const [priceFacialTreatment, setPriceFacialTreatment] = useState("Rp 1.200.000");
  const [currentFacialTreatment, setCurrentFacialTreatment] = useState("Facial Treatment 1");
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleFacialTreatmentClick = (newPrice, newFacialTreatment) => {
    setPriceFacialTreatment(newPrice);
    setCurrentFacialTreatment(newFacialTreatment);
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

  const new__facialTreatment = {
    imgShow: "/images/facialtreatment.jpg",
  };

  const getFacialTreatmentText = (facialTreatment) => {
    switch (facialTreatment) {
      case "Facial Treatment 1":
        return "Facial Treatment 1 is a rejuvenating treatment perfect for all skin types. It includes cleansing, exfoliation, and hydration.";
      case "Facial Treatment 2":
        return "Facial Treatment 2 is a deep-cleansing treatment ideal for oily and acne-prone skin. It helps to reduce breakouts and purify the skin.";
      case "Facial Treatment 3":
        return "Facial Treatment 3 is an anti-aging treatment designed to reduce the appearance of fine lines and wrinkles.";
      default:
        return "is a rejuvenating treatment perfect for all skin types. It includes cleansing, exfoliation, and hydration.";
    }
  };

  return (
    <div id="facial__treatment__sec">
      <div className="facial__treatment__sec__container">
        <div className="facial__treatment__sec__left">
          <img src={new__facialTreatment.imgShow} alt="facial__treatment__image" />
          <div className="text__facial__treatment">
            <h2>{currentFacialTreatment}</h2>
            <p>{getFacialTreatmentText(currentFacialTreatment)}</p>
          </div>
        </div>

        <div className="facial__treatment__sec__right">
          <h4>SEA Salon</h4>
          <h2>Facial Treatment</h2>
          <h3>{priceFacialTreatment}</h3>
          <div className="txt__facial__treatment">
            <h4>Style</h4>
            <div className="flex__facial__treatment">
              <h3 onClick={() => handleFacialTreatmentClick("Rp 1.200.000", "Facial Treatment 1")}>Facial Treatment 1</h3>
              <h3 onClick={() => handleFacialTreatmentClick("Rp 1.500.000", "Facial Treatment 2")}>Facial Treatment 2</h3>
              <h3 onClick={() => handleFacialTreatmentClick("Rp 1.800.000", "Facial Treatment 3")}>Facial Treatment 3</h3>
            </div>
            <h2>Book Now</h2>
            <div className="comment__facial__treatment__right">
              <p>Comment</p>
              <div className="comment__facial__treatment__container">
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

export class FacialTreatment extends React.Component {
  render() {
    return (
      <>
        <BannerFacialTreatment />
        <FacialTreatmentSection />
        <Footer />
      </>
    );
  }
}
