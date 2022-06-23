import { useEffect, useState } from "react";
import { Item } from "../../interfaces";

export const usefetch = (url: string) => {
    const [data, setData] = useState<Array<Item>>([])
    const [error, setError] = useState<string>('')

    useEffect(() => {
        (async function () {
            try {
                const res = await fetch(url);
                const data: Array<Item> = await res.json();
                console.log("Произведен запрос на сервер");
                setData(data);
            } catch (e) {
                setError("Ошибка загрузки данных с сервера " + e);
            }
        })()
    }, [url]);
    return { data, error }
}