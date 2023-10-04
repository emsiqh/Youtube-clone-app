import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

export const fetchFromAPI = async (url) => {
    const options = {
        url: BASE_URL,
        params: {
            maxResults: '50'
        },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.get(`${BASE_URL}/${url}`, options);
        if (response.status !== 200) {
            throw new Error(`Request failed with status code ${response.status}`);
        }
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};