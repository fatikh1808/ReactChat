import React from "react";
import s from './ProfileInfo.module.css';
import InfoSettings from "./infoSettings/InfoSettings";
import InfoProperties from "./infoProperties/InfoProperties";
import ButtonChange from "./buttonChange/ButtonChange";

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <InfoSettings/>
            <InfoProperties/>
            <ButtonChange/>
        </div>
    )
}

export default ProfileInfo;