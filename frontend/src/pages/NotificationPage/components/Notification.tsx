import {Bell, Heart, Users} from "lucide-react";
import { formatTimeAgo } from '../../../lib/time';
import ViewFoodAction from './ViewFoodAction';

const NotificationIcon = ({ type, ...props }: { type: string }) => {
    if (type == "like") {
        return (
            <div className='flex bg-red-500 rounded-lg p-3 items-center justify-center'>
                <Heart fill={'white'} stroke={'white'}/>
            </div>
        )
    }

    if (type == 'follow') {
        return (
            <div className='flex bg-purple-500 rounded-lg p-3 items-center justify-center'>
                <Users stroke={'white'}/>
            </div>
        )
    }

    return (
        <div className='bg-black rounded-lg p-3'>
            <Bell stroke={'white'} />
        </div>
    )
}

const NotificationAction = ({ notification }: { notification: any }) => {
    if (notification.type == "like") {
        return <ViewFoodAction food={ notification.metadata }/>
    }

    return <></>
}

const Notification = ({ notification }: { notification: any }) => {
    return (
        <div className='flex flex-row gap-2 items-center w-full'>
            <NotificationIcon type={notification.type}/>
            <div>
                <p className='text-gray-500 text-sm'>
                    <span className='text-purple-500 font-semibold'>@{ notification.source } </span>
                    { notification.text }
                </p>
                <p className='text-gray-500 text-xs'>{ formatTimeAgo(notification.createdAt) }</p>
            </div>
            <div className='ml-auto max-w-1/2'>
                <NotificationAction notification={notification}/>
            </div>
        </div>
    )
}

export default Notification;