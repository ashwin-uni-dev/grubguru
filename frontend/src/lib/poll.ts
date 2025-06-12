import { BackendRequest } from "./api";

export const joinPoll = (pollCode: number) => {
    localStorage.setItem('pollCode', pollCode.toString());
}

export const leaveActivePoll = () => {
    const pollCode = localStorage.getItem('pollCode');
    BackendRequest
        .to(`polls/${pollCode}`)
        .delete({})
        .execute();

    localStorage.removeItem('pollCode');
}

export const getActivePollCode = () => {
    return Number(localStorage.getItem('pollCode'));
}

export const isPollMode = () => {
    return !!localStorage.getItem('pollCode');
}