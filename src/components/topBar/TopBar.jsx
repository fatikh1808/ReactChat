import React from "react";
import s from './TopBar.module.css';
import ChatName from "./chatName/ChatName";
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

const TopBar = () => {

    const classes = useStyles();

    return (
        <div className={s.topBar}>
            <div style={{justifySelf: "center", alignSelf: "center"}}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
            </div>
            <ChatName/>
        </div>
    )
}

export default TopBar;