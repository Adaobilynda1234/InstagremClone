import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";

const Gallery = () => {
  return (
    <div>
      <input type="file" name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoInput">
        <i className="add-photo-button fas fa-plus-square"></i>
      </label>
      <section className="gallery">
        <div className="item">
          <img src={image1} className="item-image" alt="" />
          <button className="delete-button">Delete</button>
        </div>
        <div className="item">
          <img src={image2} className="item-image" alt="" />
          <button className="delete-button">Delete</button>
        </div>
        <div className="item">
          <img src={image3} className="item-image" alt="" />
          <button className="delete-button">Delete</button>
        </div>
        <div className="item">
          <img src={image4} className="item-image" alt="" />
          <button className="delete-button">Delete</button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
