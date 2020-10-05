import {NavLink} from "react-router-dom";
import React from "react";

const Dialog = (props) => {

    const {id, name} = props;

    let path = `/dialogs/${id}`

    return (
        <div>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

export default Dialog;