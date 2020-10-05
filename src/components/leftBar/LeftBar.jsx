import React from "react";
import MainUrls from "./mainUrls/MainUrls";
import Adds from "./adds/Adds";
import s from './LeftBar.module.css';

const LeftBar = () => {
    return(
        <div className={s.leftBar}>
            <MainUrls/>
            <Adds/>
        </div>
    )
}

export default LeftBar;