import axios from "axios";

export const fetchImage = async () => {
    try {
        const response = await fetch("http://192.168.10.179:8080/api/v1/login/dia/auth", {
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

const API_BASE_URL = "http://206.189.52.50:9200";

export const saveMessage = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/message/_doc`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data; 
  } catch (error) {
    console.error("Помилка при збереженні даних:", error);
    throw error;
  }
};


const INDEX_NAME = "message"; 

export const fetchDataFromElastic = async () => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/${INDEX_NAME}/_search`,
      {
        query: {
          match_all: {}, 
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const hits = response.data.hits.hits.map((hit) => ({
      key: hit._id,
      ...hit._source,
    }));

    return hits;
  } catch (error) {
    console.error("Помилка при отриманні даних з ElasticSearch:", error);
    throw error;
  }
};

