import React from "react";
import s from './MainUrls.module.css';
import {Link} from "react-router-dom";

const MainUrls = () => {
    return (
        <div className={s.mainUrls}>
            <div>
                <Link to={'/feeds'}> Feeds </Link>
            </div>
            <div>
                <Link to={'/friends'}> Friends </Link>
            </div>
            <div>
                <Link to={'/groups'}> Groups </Link>
            </div>
            <div>
                <Link to={'/notifications'}> Notifications </Link>
            </div>
            <div>
                <Link to={'/dialogs'}> Dialogs </Link>
            </div>
            <div>
                <Link to={'/profile'}> Profile </Link>
            </div>
        </div>
    )
}

export default MainUrls;