import React, { useRef, useState } from "react";

export const FormSection = () => {
    const fileInputRef = useRef(null);
    const [files, setFiles] = useState([]);

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

    return (
        <section className="form" id="form">
            <h2 className="heading">Повідом про корупцію</h2>

            <form action="">
                <div className="container">
                    <div className="input-group">
                        <div className="input-box">
                            <input type="text" placeholder="Назва організації" />
                            <input type="text" placeholder="ФІО особи, що вчинила правопорушення" />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Звідки стало відомо" />
                            <input type="text" placeholder="ФІО особи, що вчинила правопорушення" />
                        </div>
                    </div>

                    <div className="input-group">
                        <textarea name="" id="" cols={30} rows={10} placeholder="Опишіть конкретніше правопорушення та додайте файли з доказами (за нявності)"></textarea>
                        <div className="file-drop-zone"
                            onClick={handleIconClick}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}>
                            <i className="bx bxs-pin"></i>
                            {files.length > 0 ? (
                                <ul className="file-list">
                                    {files.map((file, index) => (
                                        <li key={index}>{file.name}</li>
                                    ))}
                                </ul>
                            ) : (
                                <span>Перетягніть файли сюди або натисніть для вибору</span>
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
        </section>
    );
}