import React from "react";

import defoltUserPhoto from './images/user_default.png';

export const AdminHeader = () => {

    return (

        <header className="adminHeader">
            <div className="profile-container">
                <img src={ defoltUserPhoto } alt="user photo" />
                <p>Ібрагім Зеленко</p>
            </div>
        </header>
    );
}