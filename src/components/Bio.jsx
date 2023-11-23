import { useEffect, useState } from "react";
import getPhotoUrl from "get-photo-url";
import profileIcon from "../assets/profileIcon.svg";
import { db } from "../dexie";

const Bio = () => {
  const [userDetails, setUserDetails] = useState({
    name: "Adaobi Okwuosa",
    about:
      "An Environmental Engineering graduate proficient in bulding responsive website and app using react",
  });
  const [editFormIsOPen, seteditFormIsOpen] = useState(false);
  const [profilePhoto, setprofilePhoto] = useState(profileIcon);

  useEffect(() => {
    const setDataFromDb = async () => {
      const userDetailsFromDb = await db.bio.get("info");
      const profilePhotoFromDb = await db.bio.get("profilePhoto");
      userDetailsFromDb && setUserDetails(userDetailsFromDb);
      profilePhotoFromDb && setprofilePhoto(profilePhotoFromDb);
    };

    setDataFromDb();
  }, []);

  const updateUserDetails = async (event) => {
    event.preventDefault();
    const objectData = {
      name: event.target.nameOfUser.value,
      about: event.target.aboutUser.value,
    };

    setUserDetails(objectData);
    await db.bio.put(objectData, "info");
    seteditFormIsOpen(false);
  };

  const updateProfilePhoto = async () => {
    // get selected photo
    const newProfilePhoto = await getPhotoUrl("#profilePhotoInput");
    setprofilePhoto(newProfilePhoto);
    await db.bio.put(newProfilePhoto, "profilePhoto");

    // update state here
  };

  const editform = (
    <form className="edit-bio-form" onSubmit={(e) => updateUserDetails(e)}>
      <input
        type="text"
        id=""
        name="nameOfUser"
        defaultValue={userDetails?.name}
        placeholder="Your name"
      />
      <input
        type="text"
        id=""
        name="aboutUser"
        defaultValue={userDetails?.about}
        placeholder="About you"
      />
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
      <input type="file" accept="image/*" name="photo" id="profilePhotoInput" />
      <label htmlFor="profilePhotoInput" onClick={updateProfilePhoto}>
        <div
          className="profile-photo"
          role="button"
          title="click to edit photo"
        >
          <img src={profilePhoto} alt="profile" />
        </div>
      </label>

      <div className="profile-info">
        <p className="name">{userDetails.name}</p>
        <p className="about">{userDetails.about}</p>
        {editFormIsOPen ? editform : editButton}
      </div>
    </section>
  );
};
export default Bio;
