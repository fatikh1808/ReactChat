import React from "react";
import s from './Footer.module.css';
import FooterLeft from "./footerLeft/FooterLeft";
import FooterMiddle from "./footerMiddle/FooterMiddle";
import FooterRight from "./footerRight/FooterRight";

const Footer = () => {
    return (
        <div className={s.footer}>
            <FooterLeft/>
            <FooterMiddle/>
            <FooterRight/>
        </div>
    )
}
export default Footer;