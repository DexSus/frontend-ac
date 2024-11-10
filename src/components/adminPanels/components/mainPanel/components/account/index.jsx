import React, { useState } from "react";
import defoltUserPhoto from './images/user_default.png';

export const AccountPanel = () => {
    const [progressValue, setProgressValue] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (event) => {
        if (isDragging) {
            const progressBar = event.target.closest(".progress-bar");
            if (progressBar) {
                const { left, width } = progressBar.getBoundingClientRect();
                const dragPosition = event.clientX - left;
                const newProgressValue = Math.min(Math.max(Math.round((dragPosition / width) * 100), 0), 100);
                setProgressValue(newProgressValue);
            }
        }
    };

    const [profilePhoto, setProfilePhoto] = useState(null);

    const handlePhotoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProfilePhoto(URL.createObjectURL(file));
        }
    };

    const handleSaveChanges = () => {
        alert("Зміни збережено!");
    };

    return (
        <>
            <div className="account-preview">
                <p>Account</p>
                <h1>Інформація про користувача</h1>
            </div>

            <div className="account-settings">
                <div className="account-view">
                    <img className="profile-photo" src={defoltUserPhoto} alt="profile photo" />
                    <h2 className="data">Ібрагім Зеленко</h2>
                    <p className="role">Детектив</p>
                    <div className="account-info">
                        <h3>Завантаженість роботою</h3>
                        <div
                            className="progress-bar"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp} 
                        >
                            <div
                                className="progress"
                                style={{ width: `${progressValue}%` }}
                            >
                                <span className="progress-value">{progressValue}%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="account-inputs">
                    <h2>Деталі</h2>
                    <div className="form-group">
                        <div className="input-group">
                            <label>Ім'я</label>
                            <input type="text" placeholder="Ібрагім" />
                        </div>
                        <div className="input-group">
                            <label>Фамілія</label>
                            <input type="text" placeholder="Зеленко" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" placeholder="example@gmail.com" />
                        </div>
                        <div className="input-group">
                            <label>Пароль</label>
                            <input type="password" placeholder="••••••••" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <label>Адреса</label>
                            <input type="text" placeholder="Проспект Петра Григоренка 16" />
                        </div>
                    </div>
                    <div className="form-group photo-upload-group">
                        <label>Фото профілю</label>
                        <div className="photo-upload">
                            <img
                                src={profilePhoto || defoltUserPhoto} 
                                alt="Profile"
                                className="profile-photo-preview"
                            />
                            <input
                                type="file"
                                id="photoUpload"
                                accept="image/*"
                                onChange={handlePhotoUpload}
                                style={{ display: "none" }}
                            />
                            <label htmlFor="photoUpload" className="upload-button">
                                Обрати фото
                            </label>
                        </div>
                    </div>
                    <button className="save-button" onClick={handleSaveChanges}>
                        Зберегти зміни
                    </button>
                </div>
            </div>
        </>
    );
};
