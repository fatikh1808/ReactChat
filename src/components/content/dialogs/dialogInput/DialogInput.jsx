import s from './DialogInput.module.css';
import React from "react";
import Input from "../../../ui/input/Input";
import SendButton from "./SendButton";

const DialogInput = (props) => {

    const {newMessageText, dispatch} = props;


    let newMessage = React.createRef();

    const handleTextChange = () => {
        let text = newMessage.current.value;
        dispatch('MESSAGE_TEXT_CHANGE', text)
    };

    return (
        <div className={s.dialogInput}>
            <Input
                value={newMessageText}
                onChange={handleTextChange}
                ref={newMessage}
                feed/>
           <SendButton dispatch={dispatch}/>
        </div>
    )
};


export default DialogInput;