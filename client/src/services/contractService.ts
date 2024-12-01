import axios from "axios";
import { Source } from "../types/Sourse";
import { scheme } from "../store/scheme";

export const getContracts = async (): Promise<any[]> => {
    const response = scheme;
    // const response = await axios.get('http://192.168.0.105:443/contracts');
    // const transformedData = response.data.map((item: any) => ({
    //     id: Math.floor(Math.random() * 100000),
    //     data: item
    // }));
    return response;
};

export const addContract = async (data: any): Promise<any> => {
    const response = await axios.post<any>('http://192.168.0.105:443/contracts', {data});
    return response.data;
};