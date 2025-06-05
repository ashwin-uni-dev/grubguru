import {useEffect, useState} from "react";
import { BackendRequest } from "../../../lib/api";

export const useTopReview = () => {
    const [review, setReview] = useState<any[]>([]);
    const { _id: foodId } = JSON.parse(localStorage.getItem('selectedFood') || '{}');

    const getTopReview = async () => {
        const review = await BackendRequest
            .to(`reviews/${foodId}?onlyTop=1`)
            .get()
            .execute();

        setReview(review);
    }

    useEffect(() => {
        getTopReview();
    }, []);

    return {review};
}