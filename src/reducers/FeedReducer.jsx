import store from "../redux/store";
import * as types from '../components/constants'

const FeedReducer = (type, payload) => {
    switch (type) {
        case types.FEED_TEXT_CHANGE:
            store._state.postPage.newText = payload;
            store._subscriber(store._state);
            break;
        case types.FEED_SEND:
            let post = {
                id: 4,
                img_url: 'https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/original.jpeg',
                post_text: store._state.postPage.newText,
                likes: 0,
                comments: 0
            }
            if (store._state.postPage.newText !== '') {
                store._state.postPage.postData.push(post);
                store._state.postPage.newText = '';
                store._subscriber(store._state);
            }
            break;
        default:
            return store
    }
}

export default FeedReducer;