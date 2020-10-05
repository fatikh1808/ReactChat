import React from "react";
import s from './Dialogs.module.css';
import DialogPeople from "./dialogPeople/DialogPeople";
import Messages from "./startDialog/Messages";

const Dialogs = (props) => {

    const {dialogs, messages, newMessageText, dispatch} = props;

    return (
        <div className={s.dialog}>
            <DialogPeople
                dialogsData={dialogs}/>
            <Messages
                messagesData={messages}
                newMessageText={newMessageText}
                dispatch={dispatch}/>
        </div>
    )
}

export default Dialogs;