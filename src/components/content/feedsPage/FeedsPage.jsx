import React from "react";
import s from './FeedsPage.module.css';
import Feeds from "./feeds/Feeds";
import FeedInput from "./feedInput/FeedInput";
import FeedPhoto from "./feedPhoto/FeedPhoto";

const FeedsPage = (props) => {

    const {posts, newText, dispatch} = props;

    return (
        <div className={s.content}>
            <FeedPhoto/>
            <FeedInput newText={newText} dispatch={dispatch}/>
            <Feeds postData={posts}/>
        </div>
    )
}

export default FeedsPage;