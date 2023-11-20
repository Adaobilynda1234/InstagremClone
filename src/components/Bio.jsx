import { useState } from "react";
import profileIcon from "../assets/profileIcon.svg";

const Bio = () => {
  const [userDetails, setUserDetails] = useState({
    name: "Adaobi Okwuosa",
    about:
      "An Environmental Engineering graduate proficient in bulding responsive website and app using react",
  });
  const [editFormIsOPen, seteditFormIsOpen] = useState(false);
  const updateUserDetails = (event) => {
    event.preventDefault();
    setUserDetails({
      name: event.target.nameOfUser.value,
      about: event.target.aboutUser.value,
    });
  };
  const editform = (
    <form className="edit-bio-form" onSubmit={(e) => updateUserDetails(e)}>
      <input type="text" id="" name="nameOfUser" placeholder="Your name" />
      <input type="text" id="" name="aboutUser" placeholder="About you" />
      <br />
      <button
        type="button"
        className="cancel-button"
        onClick={() => seteditFormIsOpen(false)}
      >
        Cancel
      </button>
      <button type="submit">Save</button>
    </form>
  );
  const editButton = (
    <button onClick={() => seteditFormIsOpen(true)}>Edit</button>
  );

  return (
    <section className="bio">
      <div className="profile-photo" role="button" title="click to edit photo">
        <img src={profileIcon} alt="profile" />
      </div>
      <div className="profile-info">
        <p className="name">{userDetails.name}</p>
        <p className="about">{userDetails.about}</p>
        {editFormIsOPen ? editform : editButton}
      </div>
    </section>
  );
};

export default Bio;
