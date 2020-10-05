import s from "./DialogPeople.module.css";
import React from "react";
import Dialog from "./dialog/Dialog";


const DialogPeople = (props) => {

    const {dialogsData} = props;

    return(
        <div className={s.dialogPeople}>
            {dialogsData.map((item) => (
                <Dialog id={item.id} name={item.name} key={item.id}/>
            ))}
        </div>
    )
}

export default DialogPeople;