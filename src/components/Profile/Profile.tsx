import React from "react";
import avatar from "../../assets/images/me.jpg";
import { strings } from "../../utils/strings";
import { state } from "../../utils/state";
import IconButton from "../IconButton/IconButton";
import Underline from "../Underline/Underline";
import "./Profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <img src={avatar} alt="me" className="profile__img" />
      <span className="profile__full-name portfolio-text-medium">
        {strings.fullName}
      </span>
      <span className="profile__position portfolio-text-small">
        {strings.position}
      </span>
      <div className="profile__links-container">
        {state.profile.map((soc, i) => {
          return (
            <IconButton key={i} iconName={soc.socialNetwork} path={soc.link} />
          );
        })}
      </div>
      <Underline />
    </div>
  );
};

export default Profile;
