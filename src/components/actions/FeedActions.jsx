import * as t from '../constants'

export const sendFeed = () => {
    return {
        type: t.FEED_SEND
    }
}

export const changeFeedText = (body) => {
    return {
        type: t.FEED_TEXT_CHANGE,
        body: body
    }
}