import {useEffect, useState} from "react";
import {BackendRequest, ServerEvent} from "../../../lib/api";

export const useReviews = () => {
    const [reviews, setReviews] = useState<any[] | null>(null);
    const { _id: foodId } = JSON.parse(localStorage.getItem('selectedFood') || '{}');

    const getReviews = async () => {
        const reviews = await BackendRequest
            .to(`reviews/${foodId}`)
            .get()
            .execute();
        setReviews(reviews);
    }

    useEffect(() => {
        getReviews();
    }, []);

    useEffect(() => {
        const serverEvent = ServerEvent.subscribe('events/reviews?foodId=' + foodId)

        serverEvent.onMessage(getReviews)

        return () => {
            serverEvent.close();
        }
    }, [])

    return { reviews, foodId, getReviews };
}