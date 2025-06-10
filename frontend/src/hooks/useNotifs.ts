import {ServerEvent} from "../lib/api";
import {useEffect} from "react";

export const useNotifs = (callback: (message: any) => void) => {
    useEffect(() => {
        const serverEvent = ServerEvent.subscribe('events/notifications')

        serverEvent.onMessage(callback)

        return () => {
            serverEvent.close();
        }
    }, [])
}