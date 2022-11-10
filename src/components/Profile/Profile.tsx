import React from "react";
import avatar from "../../assets/images/me.jpg";
import { strings } from "../../utils/strings";
import { state } from "../../utils/state";
import IconButton from "../IconButton/IconButton";
import Underline from "../Underline/Underline";
import "./Profile.scss";

const Profile = () => {
  return (
    <header className="profile">
      <img
        src={avatar}
        alt={`${strings.fullName} image`}
        title={`${strings.fullName}`}
        loading="eager"
        className="profile__img"
        width="100"
        height="100"
      />
      <span className="profile__full-name portfolio-text-medium">
        {strings.fullName}
      </span>
      <h2 className="profile__position portfolio-text-small">
        {strings.position}
      </h2>
      <div className="profile__links-container">
        {state.profile.map((soc, i) => {
          return (
            <IconButton key={i} iconName={soc.socialNetwork} path={soc.link} />
          );
        })}
      </div>
      <Underline />
    </header>
  );
};

export default Profile;
