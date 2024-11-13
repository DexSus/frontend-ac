export const fetchImage = async () => {
    try {
        const response = await fetch("http://26.36.232.140:8080/api/v1/login/dia/auth", {
            method: 'GET',
            headers: {
                "Accept": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.qrcodeInBase64);
        return data.qrcodeInBase64;

    } catch (error) {
        console.error("Error fetching image:", error);
        throw error;
    }
};
