import s from './FeedItem.module.css';
import Button from "../../../../ui/button/Button";
import React from "react";

const FeedItem = (props) => {

    const {img, post, likes, comments} = props;

    return (
        <div className={s.feedItem}>
            <img alt={'avatar'}
                 src={img}/>
            <span>{post}</span>
            <Button feedDelete>x</Button>
            <div style={{display: "inline-block"}}>
                <div style={{display: "inline-block"}}>
                    {likes} likes
                </div>
                <div style={{display: "inline-block"}}>
                    {comments} comments
                </div>
            </div>
        </div>
    )
}

export default FeedItem;