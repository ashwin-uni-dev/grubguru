import { BackendRequest } from "./api";

export const leaveActivePoll = () => {
    const pollCode = localStorage.getItem('pollCode');
    BackendRequest
        .to(`polls/${pollCode}`)
        .delete({})
        .execute();

    localStorage.removeItem('pollCode');
}