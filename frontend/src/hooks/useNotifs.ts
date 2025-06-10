import {ServerEvent} from "../lib/api";
import {useEffect} from "react";

export const useNotifs = () => {
    useEffect(() => {
        const serverEvent = ServerEvent.subscribe('events/notifications')

        serverEvent.onMessage((message: any) => { console.log(message) })

        return () => {
            serverEvent.close();
        }
    }, [])
}