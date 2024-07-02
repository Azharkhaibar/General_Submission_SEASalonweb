import '../sass/layout.scss';
import React, { useState } from 'react';
import { BannerColoring } from './bannerlayout';
import { Footer } from '../frontend/components/home';

export const ColoringSection = () => {
  const [priceColoring, setPriceColoring] = useState("Rp 2.700.000");
  const [currentColoring, setCurrentColoring] = useState("Coloring 1");
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleColoringClick = (newPrice, newColoring) => {
    setPriceColoring(newPrice);
    setCurrentColoring(newColoring);
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

  const new__coloring = {
    imgShow: "/images/coloring.jpg",
  };

  const getColoringText = (coloring) => {
    switch (coloring) {
      case "Coloring Hair":
        return "Coloring 1 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s.";
      case "Hair Coloring":
        return "Coloring 2 is another type of dummy text used in the printing and typesetting industry. It has been widely used since the 1500s.";
      case "Coloring last":
        return "Coloring 3 is a popular dummy text in the printing industry. It has been in use since the 1500s.";
      default:
        return "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s.";
    }
  };

  return (
    <div id="coloring__sec">
      <div className="coloring__sec__container">
        <div className="coloring__sec__left">
          <img src={new__coloring.imgShow} alt="coloring__image" />
          <div className="text__coloring">
            <h2>{currentColoring}</h2>
            <p>{getColoringText(currentColoring)}</p>
          </div>
        </div>

        <div className="coloring__sec__right">
          <h4>SEA Salon</h4>
          <h2>Coloring Hair</h2>
          <h3>{priceColoring}</h3>
          <div className="txt__coloring">
            <h4>Style</h4>
            <div className="flex__coloring">
              <h3 onClick={() => handleColoringClick("Rp 2.700.000", "Coloring 1")}>Coloring 1</h3>
              <h3 onClick={() => handleColoringClick("Rp 3.700.000", "Coloring 2")}>Coloring 2</h3>
              <h3 onClick={() => handleColoringClick("Rp 5.700.000", "Coloring 3")}>Coloring 3</h3>
            </div>
            <h2>Book Now</h2>
            <div className="comment__coloring__right">
              <p>Comment</p>
              <div className="comment__coloring__container">
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


export class Coloring extends React.Component {
    render() {
        return(
            <>
                <BannerColoring />
                <ColoringSection />
                <Footer />
            </>
        )
    }
}