import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";
const useFetch = (endpoint) => {
    const [data, setData] = useState();

    useEffect(() => {
        makeApiCall();
    }, [endpoint]);

    const makeApiCall = async () => {
        const res = await fetchDataFromApi(endpoint);
        console.log("hudai",res.data)
        setData(res);
    };

    return { data };
};
export default useFetch;
