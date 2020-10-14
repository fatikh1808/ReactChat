import * as t from '../constants'

export const sendMessage = () => {
    return {
        type: t.MESSAGE_SEND
    }
}

export const changeMessageText = (body) => {
    return {
        type: t.MESSAGE_TEXT_CHANGE,
        body: body
    }
}