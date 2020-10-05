import store from "../redux/store";
import * as types from '../components/constants'

const DialogReducer = (type, payload) => {
    switch (type) {
        case types.MESSAGE_TEXT_CHANGE:
            store._state.dialogsPage.newMessageText = payload;
            store._subscriber(store._state);
            break;
        case types.MESSAGE_SEND:
            let message = {
                id: 4,
                message: store._state.dialogsPage.newMessageText
            }
            if (store._state.dialogsPage.newMessageText !== ''){
                store._state.dialogsPage.messagesData.push(message);
                store._state.dialogsPage.newMessageText = '';
                store._subscriber(store._state);
            }
            break;
        default:
            return store
    }
}

export default DialogReducer;
