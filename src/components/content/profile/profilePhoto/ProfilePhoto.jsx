import React from "react";
import s from './ProfilePhoto.module.css';
import Button from "../../../ui/button/Button";

const ProfilePhoto = () => {
    return (
        <div className={s.profilePhoto}>
            <img
                src={'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}
                alt={'avatar'}
            />
            <Button>
                ChangePhoto
            </Button>
        </div>
    )
}

export default ProfilePhoto;