import React from 'react'

type LocalStorageProps = {
    data: any,
};

function useLocalStorage({data}: LocalStorageProps) {
    if(!localStorage.getItem("uuid")) {
        localStorage.setItem("uuid", JSON.stringify(data));
    }
    return localStorage.getItem("uuid");;
}