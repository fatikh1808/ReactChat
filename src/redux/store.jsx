import FeedReducer from "../reducers/FeedReducer";
import DialogReducer from "../reducers/DialogReducer";

let store = {
    _subscriber() {
        console.log('no subscribers');
    },
    _state: {
        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Fotikh"},
                {id: 2, name: "Andrei"},
                {id: 3, name: "Marat"},
                {id: 4, name: "Ivan"},
                {id: 5, name: "Kostia"},
                {id: 6, name: "Valeriy"},
            ],
            messagesData: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How r u?"},
                {id: 3, message: "How is ur project"},
                {id: 4, message: "YO"},
                {id: 5, message: "yo"},
                {id: 6, message: "bye"},
            ],
            newMessageText: 'You man'
        },
        postPage: {
            postData: [
                {
                    id: 1,
                    img_url: 'https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/original.jpeg',
                    post_text: 'Hi, hello everyone',
                    likes: 5,
                    comments: 2
                },
                {
                    id: 2,
                    img_url: 'https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/original.jpeg',
                    post_text: 'You',
                    likes: 55,
                    comments: 26
                },
                {
                    id: 3,
                    img_url: 'https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/original.jpeg',
                    post_text: 'Bye',
                    likes: 1,
                    comments: 22
                }
            ],
            newText: 'Hello Fotikh'
        }
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    dispatch(type, payload) {
        FeedReducer(type, payload)
        DialogReducer(type, payload)
    }
}

export default store;