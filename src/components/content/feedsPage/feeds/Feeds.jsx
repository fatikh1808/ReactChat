import s from "./Feeds.module.css";
import React from "react";
import FeedItem from "./feedItem/FeedItem";

const Feeds = (props) => {

    const {postData} = props;

    return (
        <div className={s.feeds}>
            {
                postData.map((item) =>
                    <FeedItem
                        id={item.id}
                        img={item.img_url}
                        post={item.post_text}
                        likes={item.likes}
                        comments={item.comments}
                        key={item.id}
                    />
                )
            }
        </div>
    )
}

export default Feeds;