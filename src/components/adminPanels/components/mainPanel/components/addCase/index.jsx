import React, { useState } from "react";
import { Message } from "./components/message/index";

const Dropdown = ({ options, label }) => (
    <div className="form-group">
        <label>{label}</label>
        <select>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
);

export const AddCasePanel = () => {
    const exampleData = {
        organization: "Державна організація",
        personName: "Іван Іваненко",
        source: "Свідок події",
        location: "Київ, вул. Хрещатик, 22",
        violationDetails: "Це дуже довгий текст про правопорушення...",
        files: ["фото1.jpg", "відео1.mp4", "документ1.pdf"],
        date: "2024-11-11T08:00:00Z"
    };

    const [selectedMessage, setSelectedMessage] = useState(null);
    const [showRecommendations, setShowRecommendations] = useState(false);

    const handleSelectMessage = (message) => {
        setSelectedMessage(message);
    };

    const handleCheckboxChange = (e) => {
        setShowRecommendations(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Логіка відправки форми
        console.log("Форма відправлена");
    };

    return (
        <>
            <div className="add-case-preview">
                <p>Створення Інциденту</p>
                <h1>Обробка повідомлень та реєстрація інцидентів</h1>
            </div>

            <div className="panel-container">
                <div className="message-container">
                    <Message data={exampleData} onClick={() => handleSelectMessage(exampleData)} />
                </div>

                <div className="create-case-container">
                    <h2>Реєстрація події</h2>
                    {selectedMessage ? (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Організація:</label>
                                <input type="text" value={selectedMessage.organization} readOnly />
                            </div>
                            <div className="form-group">
                                <label>Ім'я:</label>
                                <input type="text" value={selectedMessage.personName} readOnly />
                            </div>
                            <div className="form-group">
                                <label>Джерело:</label>
                                <input type="text" value={selectedMessage.source} readOnly />
                            </div>
                            <div className="form-group">
                                <label>Локація:</label>
                                <input type="text" value={selectedMessage.location} readOnly />
                            </div>
                            <div className="form-group">
                                <label>Деталі:</label>
                                <textarea value={selectedMessage.violationDetails} readOnly></textarea>
                            </div>
                            <div className="form-group">
                                <label>Файли:</label>
                                <input type="text" value={selectedMessage.files.join(", ")} readOnly />
                            </div>
                            <div className="form-group">
                                <label>Дата:</label>
                                <input type="text" value={new Date(selectedMessage.date).toLocaleString()} readOnly />
                            </div>

                            <div className="form-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={showRecommendations}
                                        onChange={handleCheckboxChange}
                                    />
                                    Переглянути рекомендації
                                </label>
                            </div>

                            {showRecommendations ? (
                                <>
                                    <Dropdown
                                        options={["Опція 1", "Опція 2", "Опція 3"]}
                                        label="Підходящі зареєстровані події"
                                    />
                                    <Dropdown
                                        options={["Стаття 1", "Стаття 2", "Стаття 3"]}
                                        label="Стаття закону"
                                    />
                                </>
                            ) : (
                                <>
                                    <div className="form-group">
                                        <label>Номер існуючої справи (якщо є):</label>
                                        <input type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label>Стаття, по якій скоєне правопорушення:</label>
                                        <input type="text" />
                                    </div>
                                </>
                            )}
                            <button type="submit" className="submit-button">Відправити</button>
                        </form>
                    ) : (
                        <p>Оберіть повідомлення для перегляду інформації.</p>
                    )}
                </div>
            </div>
        </>
    );
};
