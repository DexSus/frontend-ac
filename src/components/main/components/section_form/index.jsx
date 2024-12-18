import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';  
import { saveMessage } from '../../../../api/api.js';

export const FormSection = () => {
    const fileInputRef = useRef(null);
    const [files, setFiles] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [trackingNumber, setTrackingNumber] = useState("");

    const handleIconClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFiles = Array.from(event.dataTransfer.files);
        setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const generateTrackingNumber = () => {
        const uid = uuidv4(); 
        setTrackingNumber(uid);
    };

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file); 
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(event.preventDefault());
        

        try {
            generateTrackingNumber();

            const base64Files = await Promise.all(
                files.map((file) => convertToBase64(file).then((base64) => ({ base64 })))
            );

            const payload = {
                uuidv4: trackingNumber,
                organization: event.target[0].value, 
                person: event.target[1].value, 
                source: event.target[2].value, 
                location: event.target[3].value, 
                status: "Нове", 
                details: event.target[4].value, 
                files: base64Files, 
            };

            console.log(payload);
            

            await saveMessage(payload);

            setIsModalOpen(true);
        } catch (error) {
            console.error("Помилка збереження даних: ", error);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="form" id="form">
            <h2 className="heading">Повідом про корупцію</h2>

            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="input-group">
                        <div className="input-box">
                            <input type="text" placeholder="Назва організації" required />
                            <input type="text" placeholder="ФІО особи, що вчинила правопорушення" required />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Звідки стало відомо" required />
                            <input type="text" placeholder="Місце, де сталось правопорушення" required />
                        </div>
                    </div>

                    <div className="input-group">
                        <textarea
                            name="area"
                            id=""
                            cols={30}
                            rows={10}
                            required
                            placeholder="Опишіть конкретніше правопорушення та додайте файли з доказами (за наявності)"
                        ></textarea>
                        <div
                            className="file-drop-zone"
                            onClick={handleIconClick}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                        >
                            <i className="bx bxs-pin"></i>
                            {files.length > 0 ? (
                                <ul className="file-list">
                                    {files.map((file, index) => (
                                        <li className="file-list" key={index}>
                                            {file.name}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <span style={{ maxWidth: "320px" }}>
                                    Перетягніть файли сюди або натисніть для вибору
                                </span>
                            )}
                            <input
                                type="file"
                                name="evidenceFiles"
                                multiple
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                style={{ display: "none" }}
                            />
                        </div>
                    </div>
                </div>
                <input className="submit-btn" type="submit" value="Відправити" />
            </form>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Дякую за повідомлення</h2>
                        <p>Ваш унікальний номер для відстеження: </p>
                        <p><strong>{trackingNumber}</strong></p>
                        <button onClick={closeModal}>Закрити</button>
                    </div>
                </div>
            )}
        </section>
    );
};
