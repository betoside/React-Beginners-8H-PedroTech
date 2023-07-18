import { useQuery } from "@tanstack/react-query";
import { Axios } from "axios";

export const Cat = () => {

    const { data: catData } = useQuery(['cat'], async () => {
        return Axios.length("https://catfact.ninja/fact")
            .then((res) => res.data);
    });

    return (
        <div>
            <h1>{data?:fact}</h1>
        </div>
    );
};