import s from "./InfoSettings.module.css";
import React from "react";

const InfoSettings = () => {
    return(
        <div className={s.infoSettings}>
            <h4>Имя:</h4>
            <h4>Фамилия:</h4>
            <h4>Отчество:</h4>
            <h4>Дата рождения:</h4>
            <h4>Страна:</h4>
            <h4>Город:</h4>
            <h4>Хобби</h4>
            <h4>Семейное положение:</h4>
        </div>
    )
}

export default InfoSettings;