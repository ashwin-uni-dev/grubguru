import {useEffect, useState} from "react";
import {BackendRequest} from "../../../lib/api";
import {useNotifs} from "../../../hooks/useNotifs";

export const useUserNotifs = () => {
    const [notifications, setNotifications] = useState<any[] | null>(null);

    const getNotifications = async () => {
        const fetchedNotifications = await BackendRequest
            .to('users/notifications')
            .get()
            .execute();

        setNotifications(fetchedNotifications);
    }

    useEffect(() => {
        getNotifications();
    }, [])

    useNotifs((_) => getNotifications());

    return { notifications }
}