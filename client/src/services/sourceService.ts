import axios from "axios";
import { Source } from "../types/Sourse";
import { adapter } from "../store/adapter";

export const getSources = async (): Promise<Source[]> => {
    const response = adapter;
    // const response = await axios.get('http://192.168.0.105:443/sources');
    // const transformedData = response.map((item: Source) => ({
    //     data: item
    // }));
    // console.log(transformedData);
    return response;
};

export const addSource = async (data: any): Promise<Source> => {
    // console.log(json: data);
    const response = await axios.post<Source>('http://192.168.0.105:443/sources', {data});
    return response.data;
};