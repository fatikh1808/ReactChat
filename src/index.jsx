import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/store";

const renderDom = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={state}
                 // addPost={store.addPost.bind(store)}
                 // onChange={store.onChange.bind(stores)}
                 // onChangeMessageText={store.onChangeMessageText.bind(store)}
                 // sendMessage={store.sendMessage.bind(store)}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderDom(store.getState());

store.subscribe(renderDom);

serviceWorker.unregister();
