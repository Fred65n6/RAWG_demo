import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Genre {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}


export interface GenreResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    setIsLoading(true);
    apiClient
        .get<GenreResponse>("genres")
        .then((response) => {
        setGenres(response.data.results);
        setIsLoading(false);
        console.log(response);
        })
        .catch((error) => setError(error.message));
    }, []);

    return { genres, error, isLoading };
};

export default useGenres;