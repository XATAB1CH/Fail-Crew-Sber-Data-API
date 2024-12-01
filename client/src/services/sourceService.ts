import axios from "axios";
import { Source } from "../types/Sourse";

export const getSources = async (): Promise<Source[]> => {
    const response = await axios.get('http://192.168.0.105:443/sources');
    const transformedData = response.data.map((item: any) => ({
        id: Math.floor(Math.random() * 100000),
        data: item
    }));
    return transformedData;
}