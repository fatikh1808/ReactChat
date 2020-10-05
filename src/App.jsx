import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';
import TopBar from "./components/topBar/TopBar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Footer from "./components/footer/Footer";
import Profile from "./components/content/profile/Profile";
import Dialogs from "./components/content/dialogs/Dialogs";
import FeedsPage from "./components/content/feedsPage/FeedsPage";
import Notifications from "./components/content/notifications/Notifications";
import Friends from "./components/content/friends/Friends";
import Groups from "./components/content/groups/Groups";

const App = (props) => {

    const {store, dispatch} = props;

    return (
        <Router>
            <div className="grid-container">
                <TopBar/>
                <LeftBar/>
                <Switch>
                    <Route path={'/feeds'} render={() => <FeedsPage
                        posts={store.postPage.postData}
                        newText={store.postPage.newText}
                        dispatch={dispatch}
                    />}/>
                    <Route path={'/dialogs'} render={() => <Dialogs
                        dialogs={store.dialogsPage.dialogsData}
                        messages={store.dialogsPage.messagesData}
                        dispatch={dispatch}
                        newMessageText={store.dialogsPage.newMessageText}
                    />}/>
                    <Route path={'/profile'} render={Profile}/>
                    <Route path={'/notifications'} render={Notifications}/>
                    <Route path={'/friends'} render={Friends}/>
                    <Route path={'/groups'} render={Groups}/>
                </Switch>
                <RightBar/>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
