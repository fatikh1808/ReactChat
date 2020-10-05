import s from './FeedInput.module.css';
import React from "react";
import Input from "../../../ui/input/Input";
import Button from "../../../ui/button/Button";

const FeedInput = (props) => {

    const {newText, dispatch} = props;

    let newFeedItem = React.createRef();

    const onTextChange = () => {
        let text = newFeedItem.current.value;
        dispatch('FEED_TEXT_CHANGE', text)
    }

    const addFeed = () => {
        dispatch('FEED_SEND')
    }

    return (
        <div className={s.feedInput}>
            <Input ref={newFeedItem} value={newText} onChange={onTextChange} feed/>
            <Button feed
                    onClick={addFeed}
            >
                Add feed
            </Button>
        </div>
    )
}

export default FeedInput;