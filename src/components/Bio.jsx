import React from "react";
import profileIcon from "../assets/profileIcon.svg";

const Bio = () => {
  const editform = (
    <form className="edit-bio-form">
      <input type="text" id="" placeholder="Your name" />
      <input type="text" id="" placeholder="About you" />
      <br />
      <button type="button" className="cancel-button">
        Cancel
      </button>
      <button type="button">Save</button>
    </form>
  );
  return (
    <section className="bio">
      <div className="profile-photo" role="button" title="click to edit photo">
        <img src={profileIcon} alt="profile" />
      </div>
      <div className="profile-info">
        <p className="name">Adaobi Okwuosa</p>
        <p className="about">
          An Environmental Engineering graduate proficient in bulding responsive
          website and app using react
        </p>
        <button>Edit</button>
        {editform}
      </div>
    </section>
  );
};

export default Bio;
