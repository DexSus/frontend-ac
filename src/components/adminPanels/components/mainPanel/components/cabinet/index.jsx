import React, { useState } from "react";

export const CabinetPanel = ({ selectedComplaint }) => {
    const [articleNumber, setArticleNumber] = useState("");
    const [isRecommendedArticle, setIsRecommendedArticle] = useState(false);
    const [investigator, setInvestigator] = useState("");

    const recommendedArticle = "Стаття 364 (зловживання владою або службовим становищем)";

    const handleCheckboxChange = () => {
        setIsRecommendedArticle(!isRecommendedArticle);
        if (!isRecommendedArticle) {
            setArticleNumber(recommendedArticle);
        } else {
            setArticleNumber("");
        }
    };

    const handleSubmit = () => {
        console.log("Дані для відправлення:", {
            complaint: selectedComplaint,
            articleNumber,
            investigator
        });
    };

    return (
        <>
            <div className="account-preview">
                <p>Cabinet</p>
                <h1>Розслідування</h1>
            </div>

            {selectedComplaint && (
                <form className="complaint-card" onSubmit={handleSubmit}>
                    <h2>{selectedComplaint.organization}</h2>
                    <p><strong>Особа:</strong> {selectedComplaint.person}</p>
                    <p><strong>Джерело:</strong> {selectedComplaint.source}</p>
                    <p><strong>Місцезнаходження:</strong> {selectedComplaint.location}</p>
                    <p><strong>Статус:</strong> {selectedComplaint.status}</p>
                    <p><strong>Деталі:</strong> {selectedComplaint.details}</p>
                    <div className="files-storage">
                        <strong>Файли:</strong>
                        <ul>
                            {selectedComplaint.files.map((file, index) => (
                                <li key={index}>
                                    <a href={file.url} target="_blank" rel="noopener noreferrer">{file.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="investigation-form">
                        <label>
                            <strong>Номер статті:</strong>
                            <input
                                className="article-number"
                                type="text"
                                value={articleNumber}
                                onChange={(e) => setArticleNumber(e.target.value)} // доданий обробник onChange
                            />
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                checked={isRecommendedArticle}
                                onChange={handleCheckboxChange}
                            />
                            Обрати рекомендовану статтю
                        </label>

                        <label>
                            <strong>Хто буде розслідувати:</strong>
                            <select
                                value={investigator}
                                onChange={(e) => setInvestigator(e.target.value)}
                            >
                                <option value="">Оберіть орган</option>
                                <option value="ДБР">ДБР</option>
                                <option value="НАБУ">НАБУ (Рекомендовано)</option>
                                <option value="Поліція">Поліція</option>
                            </select>
                        </label>

                        <button type="submit">Відправити</button>
                    </div>
                </form>
            )}
        </>
    );
};
