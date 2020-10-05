import s from "./Messages.module.css";
import React from "react";
import Message from "./message/Message";
import DialogInput from "../dialogInput/DialogInput";


const Messages = (props) => {

    const {messagesData, newMessageText, dispatch} = props;

    const messageElements = messagesData.map((item) => (
        <Message message={item.message} key={item.id}/>
    ))

    return (
        <div className={s.startDialog}>
            <div>
                {messageElements}
            </div>
            <DialogInput
                newMessageText={newMessageText}
                dispatch={dispatch}/>
        </div>
    )
}

export default Messages;