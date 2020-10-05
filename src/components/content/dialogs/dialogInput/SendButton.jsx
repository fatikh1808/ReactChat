import React, {useState} from "react";
import Button from "../../../ui/button/Button";

const SendButton = (props) => {

    const {dispatch} = props;

    const [isSend, setIsSend] = useState(true)
    const [isSending, setIsSending] = useState(false)
    const [isSended, setIsSended] = useState(false)

    const handleSendMessage = () => {
        //need add checker
        onClick()
        setTimeout(() => dispatch('MESSAGE_SEND'), 1000)
    };

    const onClick = () => {
        setIsSend(false)
        setIsSending(true)
        setTimeout(() => {
            setIsSending(false)
            setIsSended(true)
        }, 1000);
        setTimeout(() => {
            setIsSended(false)
            setIsSend(true)
        }, 1500)
    }
    const handleDisplay = (option) => {
        if (option) {
            return {display: "block"}
        } else {
            return {display: "none"}
        }
    }

    return (
        <Button
            feed
            disabled={!isSend}
            onClick={handleSendMessage}>
            <div style={handleDisplay(isSend)}>Send</div>
            <div style={handleDisplay(isSending)}>Sending...</div>
            <div style={handleDisplay(isSended)}>Success</div>
        </Button>
    )
}

export default SendButton;