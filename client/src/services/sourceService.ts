import axios from "axios";

export const getSources = async () => {
    const response = await axios.get('/sources');
    return response.data;
}