import Layout from "../../components/Layout";
import {useUserNotifs} from "./hooks/useNotifs";
import Notification from './components/Notification';
import NotificationSkeleton from "./components/NotificationSkeleton";

const NotificationPage = () => {
    const { notifications } = useUserNotifs();

    return (
        <Layout back={false}>
            <div className='flex flex-col gap-2'>
                <p className='text-xl font-semibold'>Notifications</p>
                {
                    notifications != null ? notifications.map((notification: any, index: number) => (
                        <Notification key={index} notification={notification} />
                    )) : new Array(20).fill(0).map(_ => <NotificationSkeleton />)
                }
            </div>
        </Layout>
    )
}

export default NotificationPage;