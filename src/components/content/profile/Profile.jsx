import React from "react";
import s from './Profile.module.css';
import ProfilePhoto from "./profilePhoto/ProfilePhoto";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfilePhoto/>
            <ProfileInfo/>
        </div>
    )
}

export default Profile;