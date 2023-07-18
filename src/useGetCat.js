import { useQuery } from "@tanstack/react-query";
// import { Axios } from "axios";
import Axios, * as others from 'axios';

export const useGetCat = () => {

    const { 
        data, 
        refetch, 
        isLoading: isCatLoading,
        error,
    } = useQuery(["cat"], async () => {
        return Axios.get("https://catfact.ninja/fact")
            .then((res) => res.data);
    });

    const refetchData = () => {
        // alert("DATA REFETECHED");
        refetch();
    }

    if (error) {
        

    }

    return { data, refetchData, isCatLoading };
};