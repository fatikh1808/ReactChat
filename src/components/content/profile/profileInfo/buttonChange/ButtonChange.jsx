import s from "./ButtonChange.module.css";
import Button from "../../../../ui/button/Button";
import React from "react";

const ButtonChange = () => {
    return(
        <div className={s.buttonChange}>
            <Button>
                Change info
            </Button>
        </div>
    )
}

export default ButtonChange;