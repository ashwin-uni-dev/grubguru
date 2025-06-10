import Layout from "../../components/Layout";
import {useUserNotifs} from "./hooks/useNotifs";
import Notification from './components/Notification';

const NotificationPage = () => {
    const { notifications } = useUserNotifs();

    return (
        <Layout back={false}>
            <div className='flex flex-col gap-2'>
                {
                    notifications.map((notification: any, index: number) => (
                        <Notification key={index} notification={notification} />
                    ))
                }
            </div>
        </Layout>
    )
}

export default NotificationPage;